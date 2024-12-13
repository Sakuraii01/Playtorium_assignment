import { CartServiceInterface } from "./cart.interface";
import { cartEntity } from "../../repositories/cart/type";
import { RemoteA } from "../../remote";
import { API_PATH } from "../../../constant/path.route";
export class CartService extends RemoteA implements CartServiceInterface {
  reqGetCart = async (userId: number) => {
    const response = await this.getAxiosInstance().get(API_PATH.cart, {
      params: { userId: userId },
    });
    const { data } = response;
    return data;
  };

  reqPostCart = async (entity: cartEntity) => {
    const response = await this.getAxiosInstance().post(API_PATH.cart, entity);
    const { data } = response;
    return data;
  };

  reqPutCart = async (entity: cartEntity) => {
    const response = await this.getAxiosInstance().put(API_PATH.cart, entity);
    const { data } = response;
    return data;
  };

  reqDeleteCart = async (entity: cartEntity) => {
    const response = await this.getAxiosInstance().delete(API_PATH.cart, {
      data: entity,
    });
    const { data } = response;
    return data;
  };
}
