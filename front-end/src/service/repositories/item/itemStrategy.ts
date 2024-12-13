import { ItemService } from "../../remotes/item/item";
import { ItemsEntity } from "./type";

export interface ItemStrategy {
  getItems: (entity?: ItemsEntity) => Promise<ItemService>;
}
