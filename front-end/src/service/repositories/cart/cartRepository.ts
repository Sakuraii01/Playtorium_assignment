import { CartStrategy } from "./cartStrategy";
import { CartService } from "../../remotes/cart/cart";
import { cartEntity } from "./type";
export class CartRepository implements CartStrategy {
  private service: CartService;
  constructor(remote: CartService) {
    this.service = remote;
  }
  getCart = async (userId: number) => {
    return await this.service.reqGetCart(userId);
  };
  postCart = async (entity: cartEntity) => {
    return await this.service.reqPostCart(entity);
  };
  putCart = async (entity: cartEntity) => {
    return await this.service.reqPutCart(entity);
  };
  deleteCart = async (entity: cartEntity) => {
    return await this.service.reqDeleteCart(entity);
  };
}
