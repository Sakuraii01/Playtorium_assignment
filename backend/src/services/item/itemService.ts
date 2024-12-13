import { ItemServiceInterface } from "./itemService.interface";
import { ItemType, getItems, getItemsByCategory } from "../../models/itemModel";
export class ItemService implements ItemServiceInterface {
  itemCategoy?: number;
  constructor(itemCategoy?: number) {
    this.itemCategoy = itemCategoy;
  }

  getItems = async (): Promise<ItemType[] | []> => {
    const items = await getItems();
    return items || [];
  };
  getItemsByCategory = async (): Promise<ItemType[] | []> => {
    if (this.itemCategoy) {
      const items = await getItemsByCategory(this.itemCategoy);
      return items;
    }
    return [];
  };
}
