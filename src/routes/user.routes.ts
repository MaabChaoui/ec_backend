import express from "express";
import { getMeHandler, getUsersHandler } from "../controllers/user.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";

const router = express.Router();

router.use(deserializeUser, requireUser);

// Get currently logged in user
router.get("/me", getMeHandler);

router.get("/getUsers", getUsersHandler);
export default router;
