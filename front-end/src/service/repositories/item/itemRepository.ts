import { ItemStrategy } from "./itemStrategy";
import { ItemService } from "../../remotes/item/item";
import { ItemsEntity } from "./type";
export class ItemRepository implements ItemStrategy {
  private service: ItemService;
  constructor(remote: ItemService) {
    this.service = remote;
  }
  getItems = async (entity?: ItemsEntity) => {
    return await this.service.reqGetItems(entity);
  };
}
