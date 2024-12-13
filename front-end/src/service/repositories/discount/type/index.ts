export type DiscountEntity = {
  user_id: number;
  coupon_id: number;
  ontop_id: number;
  seasonal_id: number;
  point?: number;
};
export type UserCartPriceDTO = {
  total_discount: number;
  total_price: number;
  coupon_discount: number;
  ontop_discount: number;
  seasonal_discount: number;
};
export type DiscountConfig = {
  Coupon?: CouponModel;
  OnTop?: OnTopModel;
  Seasonal?: SeasonalModel;
};

export type CouponModel = {
  type: "percentage" | "amount";
  value: number;
};

export type OnTopModel = {
  type: "point" | "percentage";
  category_id?: number;
  point_cap?: number;
  value?: number;
};

export type SeasonalModel = {
  threshold: number;
  value: number;
};

export type DiscountModel = {
  id: number;
  name: string;
  discount_type_id: number;
  description: string;
  config: CouponModel | OnTopModel | SeasonalModel;
  activeFrom: Date;
  activeTo: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  discount_type?: {
    id: number;
    type: string;
  };
};

export type AppliedDiscount = {
  coupon: DiscountModel | null;
  ontop: DiscountModel | null;
  seasonal: DiscountModel | null;
};

export type DiscountModelOnCategory = {
  coupon_useable: DiscountModel[];
  ontop_useable: DiscountModel[];
  seasonal_useable: DiscountModel[];
};
