import { RequestHandler } from "express";
import { getUserIdFromHeader } from "../utils/reqUtils";

export const validateUserIdHeader: RequestHandler = (req, res, next) => {
  try {
    const userId = getUserIdFromHeader(req);

    if (!userId) {
      res.status(400).json({ error: "User ID header is required." });
      return;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error validating user ID header." });
  }
};
