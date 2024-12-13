import { CartService } from "../../remotes/cart/cart";
import { cartEntity } from "./type";
import { AxiosResponse } from "axios";

export interface CartStrategy {
  getCart: (userId: number) => Promise<CartService>;
  postCart: (entity: cartEntity) => Promise<AxiosResponse>;
  putCart: (entity: cartEntity) => Promise<AxiosResponse>;
  deleteCart: (entity: cartEntity) => Promise<AxiosResponse>;
}
