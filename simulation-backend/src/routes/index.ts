import { Router } from "express";
import { logAttempt } from "../controllers/recordAttemptController";
import { getDashboard } from "../controllers/dashboardController";
import basicAuth from "../middleware/auth";

const router = Router();

router.post("/log-attempt", logAttempt);
router.get("/dashboard", basicAuth, getDashboard);

export default router;
