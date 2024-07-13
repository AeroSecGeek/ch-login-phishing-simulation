import { Router } from "express";
import { logAttempt } from "../controllers/recordAttemptController";
import { getDashboard } from "../controllers/dashboardController";

const router = Router();

router.post("/log-attempt", logAttempt);
router.get("/dashboard", getDashboard);

export default router;
