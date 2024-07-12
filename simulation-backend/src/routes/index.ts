import { Router } from "express";
import { logAttempt } from "../controllers/recordAttemptController";

const router = Router();

router.post("/log-attempt", logAttempt);

export default router;
