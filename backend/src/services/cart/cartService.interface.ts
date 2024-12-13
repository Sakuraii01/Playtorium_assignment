import { userCartType, cartEntity } from "../../models/cartModel";
export interface useCartServiceInterface {
  getUserCart: (userId: number) => Promise<userCartType[]>;
  addToCart: (entity: cartEntity) => Promise<any>;
  updateCart: (entity: cartEntity) => Promise<any>;
  removeItemFromCart: (entity: cartEntity) => Promise<any>;
}
