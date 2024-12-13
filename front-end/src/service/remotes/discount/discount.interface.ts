import {
  DiscountEntity,
  UserCartPriceDTO,
  DiscountModelOnCategory,
} from "../../repositories/discount/type";
export interface DiscountServiceInterface {
  reqGetUserCartPrice: (entity: DiscountEntity) => Promise<UserCartPriceDTO>;
  reqGetDiscountCategory: () => Promise<DiscountModelOnCategory>;
}
