import { UserStrategy } from "./userStrategy";
import { UserService } from "../../remotes/user/user";
import { UserEntity } from "./type";

export class UserRepository implements UserStrategy {
  private userService: UserService;
  constructor(remote: UserService) {
    this.userService = remote;
  }
  postLogin = async (entity: UserEntity) => {
    return await this.userService.reqPostLogin(entity);
  };
}
