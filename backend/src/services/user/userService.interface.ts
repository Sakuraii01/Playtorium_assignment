import { UserType } from "src/models/userModel";
export interface UserServiceInterface {
  getUser: (userId: number) => Promise<UserType | null>;
  createUser: (name: string) => Promise<UserType>;
}
