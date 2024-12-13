import prisma from "./prisma";
export type DiscountConfig = {
  Coupon?: CouponModel | null;
  OnTop?: OnTopModel | null;
  Seasonal?: SeasonalModel | null;
};

export type CouponModel = {
  discount_type: "percentage" | "amount";
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

export const isCouponModel = (config: any): config is CouponModel => {
  return (
    typeof config === "object" &&
    config !== null &&
    "type" in config &&
    "value" in config &&
    (config.type === "percentage" || config.type === "amount")
  );
};

export const getDiscountUseAble = async () => {
  const discounts = await prisma.discount.findMany({
    where: { isActive: true },
    include: { discount_type: true },
  });

  if (!discounts || discounts.length === 0) {
    throw new Error("No active discounts found");
  }

  return discounts;
};

export const getDiscountById = async (id: number) => {
  const discount = await prisma.discount.findUnique({
    where: { id },
    include: { discount_type: true },
  });

  return discount || null;
};
