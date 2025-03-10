import express from "express";
import {
  loginUserHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerUserHandler,
} from "../controllers/auth.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  createUserSchema,
  loginUserSchema,
  verifyEmailSchema,
} from "../schemas/user.schema";

const router = express.Router();

// Register user
router.post("/register", validate(createUserSchema), registerUserHandler);

// Login user
router.post("/login", validate(loginUserSchema), loginUserHandler);

// Logout user
router.get("/logout", deserializeUser, requireUser, logoutHandler);

// Refresh access token
router.get("/refresh", refreshAccessTokenHandler);
router.get("/tempRefresh", (req, res) => {
  res.status(200).json({ role: "admin" });
  // res.status(200).json({role: "normal"})
});

export default router;
