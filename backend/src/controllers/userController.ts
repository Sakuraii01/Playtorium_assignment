import { Request, Response } from "express";
import { UserService } from "../services/user/userService";

export const getUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const { username } = req.body;
    const service = new UserService(username);
    const user = await service.getUser();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching user" });
  }
};
