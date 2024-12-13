import { Request } from "express";
export const getUserIdFromHeader = (req: Request): string | null => {
  const userId = req.headers["user-id"];
  return typeof userId === "string" ? userId : null;
};
