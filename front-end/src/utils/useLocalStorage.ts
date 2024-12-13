import { useMemo } from "react";
import { UserType } from "../service/repositories/user/type";
export const clearToken = async () => {
  return localStorage.removeItem("user_id");
};

export const useToken = () => {
  return useMemo(() => {
    return JSON.parse(localStorage.getItem("user_id") ?? "{}") as UserType;
  }, []);
};
