import { DiscountService } from "../../remotes/discount/discount";
import { DiscountEntity } from "./type";

export interface DiscountStrategy {
  getDiscountCategory: () => Promise<DiscountService>;
  getUserCartPrice: (entity: DiscountEntity) => Promise<DiscountService>;
}
