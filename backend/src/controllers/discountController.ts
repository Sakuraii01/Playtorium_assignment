import { Request, Response } from "express";
import {
  CalculateDiscountService,
  DiscountUseableService,
} from "../services/discount/discountService";
import {
  getDiscountById,
  DiscountConfig,
  CouponModel,
  OnTopModel,
  SeasonalModel,
} from "../models/discountModel";
export const getDiscountController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { user_id, coupon_id, ontop_id, seasonal_id, point } = req.query;

    const discountUsage = await discountController(
      Number(coupon_id),
      Number(ontop_id),
      Number(seasonal_id)
    );

    const service = new CalculateDiscountService(
      Number(user_id),
      discountUsage,
      Number(point)
    );
    const totalDiscount = await service.getTotalDiscount();
    const totalPrice = await service.getTotalPrice();
    const couponDiscount = await service.getCouponDiscount();
    const ontopDiscount = await service.getOnTopDiscount();
    const seasonalDiscount = await service.getSeasonalDiscount();

    res.status(200).json({
      total_discount: totalDiscount,
      total_price: totalPrice,
      coupon_discount: couponDiscount,
      ontop_discount: ontopDiscount,
      seasonal_discount: seasonalDiscount,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching discount" });
  }
};

export const getDiscountCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const service = new DiscountUseableService();

    const coupon_useable = await service.getCouponUseable();
    const ontop_useable = await service.getOnTopUseable();
    const seasonal_useable = await service.getSeasonalUseable();
    const useable = {
      coupon_useable,
      ontop_useable,
      seasonal_useable,
    };

    res.status(200).json(useable);
  } catch (error) {
    res.status(500).json({ error: "Error fetching discount" });
  }
};

const discountController = async (
  coupon_id: number,
  ontop_id: number,
  seasonal_id: number
): Promise<DiscountConfig> => {
  const coupon = (await getDiscountById(Number(coupon_id)))
    ?.config as CouponModel;
  const ontop = (await getDiscountById(Number(ontop_id)))?.config as OnTopModel;
  const seasonal = (await getDiscountById(Number(seasonal_id)))
    ?.config as SeasonalModel;

  return { Coupon: coupon, OnTop: ontop, Seasonal: seasonal };
};
