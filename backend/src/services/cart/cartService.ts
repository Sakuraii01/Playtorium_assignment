import { useCartServiceInterface } from "./cartService.interface";

import {
  getUserCart,
  updateItemInCart,
  addItemToCart,
  removeItemFromCart,
  cartEntity,
} from "../../models/cartModel";

export class CartService implements useCartServiceInterface {
  userId: number;
  entity?: cartEntity;
  constructor(userId: number, entity?: cartEntity) {
    this.userId = userId;
    this.entity = entity;
  }
  getUserCart = async () => {
    try {
      const userCart = await getUserCart(this.userId);

      return userCart;
    } catch (error) {
      throw error;
    }
  };

  addToCart = async () => {
    try {
      if (!this.entity) {
        return;
      }
      if (this.entity.quantity === 0) {
        await removeItemFromCart(this.entity);
        return;
      }
      await addItemToCart(this.entity);
    } catch (error) {
      throw error;
    }
  };

  updateCart = async () => {
    try {
      if (!this.entity) {
        return;
      }
      if (this.entity.quantity === 0) {
        await removeItemFromCart(this.entity);
        return;
      }

      await updateItemInCart(this.entity);
    } catch (error) {
      throw error;
    }
  };

  removeItemFromCart = async () => {
    try {
      if (!this.entity) {
        return;
      }
      await removeItemFromCart(this.entity);
    } catch (error) {
      throw error;
    }
  };
}
