import { UserServiceInterface } from "./userService.interface";
import { getUser, createUser } from "../../models/userModel";
export class UserService implements UserServiceInterface {
  name: string;
  constructor(userId: string) {
    this.name = userId;
  }
  getUser = async () => {
    try {
      const user = await getUser(this.name);
      return user;
    } catch (error) {
      throw error;
    }
  };
  createUser = async () => {
    try {
      const user = await createUser(this.name);
      return user;
    } catch (error) {
      throw error;
    }
  };
}
