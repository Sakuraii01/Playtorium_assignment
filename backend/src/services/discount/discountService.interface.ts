import { DiscountModel } from "../../models/discountModel";
export interface CalculateDiscountServiceInterface {
  getTotalDiscount(): Promise<number>;

  getTotalPrice(): Promise<number>;

  getCouponDiscount(): Promise<number>;

  getOnTopDiscount(): Promise<number>;

  getSeasonalDiscount(): Promise<number>;
}

export interface DiscountUseableServiceInterface {
  getCouponUseable(): Promise<DiscountModel[]> | [];

  getOnTopUseable(): Promise<DiscountModel[]> | [];

  getSeasonalUseable(): Promise<DiscountModel[]> | [];
}
