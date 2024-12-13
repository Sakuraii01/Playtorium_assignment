import { userCartType, cartEntity } from "../../repositories/cart/type";
import { AxiosResponse } from "axios";
export interface CartServiceInterface {
  reqGetCart: (userId: number) => Promise<userCartType[]>;
  reqPostCart: (entity: cartEntity) => Promise<AxiosResponse>;
  reqPutCart: (entity: cartEntity) => Promise<AxiosResponse>;
  reqDeleteCart: (entity: cartEntity) => Promise<AxiosResponse>;
}
