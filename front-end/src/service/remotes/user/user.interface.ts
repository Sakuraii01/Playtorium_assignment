import { UserType, UserEntity } from "../../repositories/user/type/index";
export interface UserServiceInterface {
  reqPostLogin: (entity: UserEntity) => Promise<UserType>;
  //   reqPostRegister: (name: string, email: string, password: string) => Promise<any>;
}
