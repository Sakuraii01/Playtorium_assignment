import { ItemServiceInterface } from "./item.interface";
import { ItemsEntity } from "../../repositories/item/type";
import { RemoteA } from "../../remote";

import { API_PATH } from "../../../constant/path.route";

export class ItemService extends RemoteA implements ItemServiceInterface {
  reqGetItems = async (entity?: ItemsEntity) => {
    const response = await this.getAxiosInstance().get(API_PATH.item, {
      params: entity,
    });
    const { data } = response;
    return data;
  };
}
