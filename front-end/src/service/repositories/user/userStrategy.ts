import { UserService } from "../../remotes/user/user";
import { UserEntity } from "./type";

export interface UserStrategy {
  postLogin: (entity: UserEntity) => Promise<UserService>;
}
