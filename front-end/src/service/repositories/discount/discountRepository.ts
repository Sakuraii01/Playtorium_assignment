import { DiscountStrategy } from "./discountStrategy";
import { DiscountService } from "../../remotes/discount/discount";
import { DiscountEntity } from "./type";

export class DiscountRepository implements DiscountStrategy {
  private DiscountService: DiscountService;
  constructor(remote: DiscountService) {
    this.DiscountService = remote;
  }
  async getDiscountCategory() {
    return await this.DiscountService.reqGetDiscountCategory();
  }
  async getUserCartPrice(entity: DiscountEntity) {
    return await this.DiscountService.reqGetUserCartPrice(entity);
  }
}
