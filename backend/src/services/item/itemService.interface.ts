import { ItemType } from "src/models/itemModel";

export interface ItemServiceInterface {
  getItems: () => Promise<ItemType[]> | [];
  getItemsByCategory: (id: number) => Promise<ItemType[]> | [];
  //   createItem: (name: string, price: number) => Promise<any>;
  //   updateItem: (id: number, name: string, price: number) => Promise<any>;
  //   deleteItem: (id: number) => Promise<any>;
}
