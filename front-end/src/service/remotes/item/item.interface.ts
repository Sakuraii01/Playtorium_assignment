import { ItemsEntity, ItemsType } from "../../repositories/item/type";

export interface ItemServiceInterface {
  reqGetItems: (entity?: ItemsEntity) => Promise<ItemsType[]>;
}
