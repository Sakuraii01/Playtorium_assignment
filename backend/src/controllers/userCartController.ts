import { Request, Response } from "express";
import { CartService } from "../services/cart/cartService";

export const getUserCart = async (req: Request, res: Response) => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { userId } = req.query;
    const service = new CartService(Number(userId));
    const cart = await service.getUserCart();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user cart" });
  }
};

export const addItemToCart = async (req: Request, res: Response) => {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { user_id, item_id, quantity } = req.body;
    const service = new CartService(Number(user_id), {
      user_id: Number(user_id),
      item_id: Number(item_id),
      quantity: Number(quantity),
    });
    const cart = await service.addToCart();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

export const updateItemInCart = async (req: Request, res: Response) => {
  try {
    if (req.method !== "PUT") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { user_id, item_id, quantity } = req.body;
    const service = new CartService(Number(user_id), {
      user_id: Number(user_id),
      item_id: Number(item_id),
      quantity: Number(quantity),
    });
    const cart = await service.updateCart();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error updating item in cart" });
  }
};

export const deletedtemFromCart = async (req: Request, res: Response) => {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { user_id, item_id } = req.body;
    const service = new CartService(Number(user_id), {
      user_id: Number(user_id),
      item_id: Number(item_id),
      quantity: 0,
    });
    const cart = await service.removeItemFromCart();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error removing item from cart" });
  }
};
