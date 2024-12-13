import { DiscountServiceInterface } from "./discount.interface";
import { RemoteA } from "../../remote";
import { API_PATH } from "../../../constant/path.route";
import { DiscountEntity } from "../../repositories/discount/type";

export class DiscountService
  extends RemoteA
  implements DiscountServiceInterface
{
  reqGetDiscountCategory = async () => {
    const response = await this.getAxiosInstance().get(
      API_PATH.discount_catogory
    );
    const { data } = response;
    return data;
  };
  reqGetUserCartPrice = async (entity: DiscountEntity) => {
    const response = await this.getAxiosInstance().get(API_PATH.discount, {
      params: entity,
    });
    const { data } = response;
    return data;
  };
}
