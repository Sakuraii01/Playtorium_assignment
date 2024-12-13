import { Request, Response } from "express";
import { ItemService } from "../services/item/itemService";
export const getItemsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { item_category } = req.query;

    const service = new ItemService(
      item_category ? Number(item_category) : undefined
    );

    const items = item_category
      ? await service.getItemsByCategory()
      : await service.getItems();

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching items" });
  }
};
