import { userCartType } from "../../models/cartModel";
import {
  DiscountModel,
  DiscountConfig,
  CouponModel,
  OnTopModel,
  SeasonalModel,
} from "../../models/discountModel";
import {
  CalculateDiscountServiceInterface,
  DiscountUseableServiceInterface,
} from "./discountService.interface";
import { getUserCart } from "../../models/cartModel";
import { getDiscountUseAble } from "../../models/discountModel";

export class CalculateDiscountService
  implements CalculateDiscountServiceInterface
{
  discount: DiscountConfig;
  point?: number;
  user_id: number;
  constructor(user_id: number, discount: DiscountConfig, point?: number) {
    this.user_id = user_id;
    this.discount = discount;
    this.point = point;
  }

  private couponDiscountAmount = 0;
  private onTopDiscountAmount = 0;
  private seasonalDiscountAmount = 0;

  getTotalDiscount = async () => {
    const cart = await this.getUserCartItem();
    let TotalAmount = cart.reduce(
      (sum, item) => sum + item.Item.price * item.quantity,
      0
    );

    if (this.discount?.Coupon) {
      this.couponDiscountAmount = this.calCouponDiscount(
        this.discount.Coupon,
        TotalAmount
      );
      TotalAmount -= this.couponDiscountAmount;
    }
    if (this.discount?.OnTop) {
      this.onTopDiscountAmount = this.calOnTopDiscount(
        this.discount.OnTop,
        TotalAmount,
        cart,
        this.point
      );
      TotalAmount -= this.onTopDiscountAmount;
    }
    if (this.discount?.Seasonal) {
      this.seasonalDiscountAmount = this.calSeasonalDiscount(
        this.discount.Seasonal,
        TotalAmount
      );
      TotalAmount -= this.seasonalDiscountAmount;
    }

    return TotalAmount;
  };
  getTotalPrice = async () => {
    const cart = await this.getUserCartItem();
    return cart.reduce((sum, item) => sum + item.Item.price * item.quantity, 0);
  };
  getCouponDiscount = async () => {
    return this.couponDiscountAmount;
  };

  getOnTopDiscount = async () => {
    return this.onTopDiscountAmount;
  };

  getSeasonalDiscount = async () => {
    return this.seasonalDiscountAmount;
  };

  private calCouponDiscount = (coupon: CouponModel, Amount: number) => {
    if (coupon.discount_type === "percentage") {
      return Amount * (coupon.value / 100);
    } else if (coupon.discount_type === "amount") {
      return coupon.value;
    }
    return 0;
  };

  private calOnTopDiscount = (
    onTop: OnTopModel,
    Amount: number,
    cart?: userCartType[],
    point?: number
  ) => {
    if (onTop.type === "point") {
      if (point === undefined || onTop.point_cap === undefined) {
        return 0;
      }
      const maxAllowedDiscount = (Amount * onTop.point_cap) / 100;

      const usablePoints = Math.min(point, maxAllowedDiscount);

      const discount = Math.min(usablePoints, maxAllowedDiscount);

      return discount;
    } else if (
      onTop.type === "percentage" &&
      cart &&
      onTop.category_id &&
      onTop.value
    ) {
      const categoryTotal = cart
        .filter((item) => item.Item.category_id === onTop.category_id)
        .reduce((sum, item) => sum + item.Item.price * item.quantity, 0);

      return categoryTotal * (onTop.value / 100);
    }

    return 0;
  };

  private calSeasonalDiscount = (seasonal: SeasonalModel, Amount: number) => {
    return Math.floor(Amount / seasonal.threshold) * seasonal.value;
  };

  private getUserCartItem = async () => {
    return await getUserCart(this.user_id);
  };
}

export class DiscountUseableService implements DiscountUseableServiceInterface {
  getCouponUseable = async () => {
    return await this.mapperDiscountToDiscountConfig("coupon");
  };
  getOnTopUseable = async () => {
    return this.mapperDiscountToDiscountConfig("onTop");
  };
  getSeasonalUseable = async () => {
    return this.mapperDiscountToDiscountConfig("seasonal");
  };

  private mapperDiscountToDiscountConfig = async (
    discount_type: "coupon" | "onTop" | "seasonal"
  ): Promise<DiscountModel[] | []> => {
    const discount = await getDiscountUseAble();
    if (discount_type === "coupon") {
      return discount
        .filter((d) => d.discount_type.type === "coupon")
        .map((d) => ({
          ...d,
          config: d.config as CouponModel,
        }));
    } else if (discount_type === "onTop") {
      return discount
        .filter((d) => d.discount_type.type === "onTop")
        .map((d) => ({
          ...d,
          config: d.config as OnTopModel,
        }));
    } else if (discount_type === "seasonal") {
      return discount
        .filter((d) => d.discount_type.type === "seasonal")
        .map((d) => ({
          ...d,
          config: d.config as SeasonalModel,
        }));
    }

    return [];
  };
}
