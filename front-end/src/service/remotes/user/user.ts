import { RemoteA } from "../../remote";
import { UserServiceInterface } from "./user.interface";
import { API_PATH } from "../../../constant/path.route";
import { UserEntity } from "../../repositories/user/type";

export class UserService extends RemoteA implements UserServiceInterface {
  reqPostLogin = async (entity: UserEntity) => {
    const response = await this.getAxiosInstance().post(API_PATH.login, entity);
    const { data } = response;
    return data;
  };
}
