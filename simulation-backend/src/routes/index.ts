import { Router } from "express";
import {
  logChAttempt,
  logOtherAttempt,
} from "../controllers/recordAttemptController";
import { getDashboard } from "../controllers/dashboardController";
import basicAuth from "../middleware/auth";

const router = Router();

router.post("/log-attempt", logChAttempt);
router.post("/log-other-attempt", logOtherAttempt);
router.get("/dashboard", basicAuth, getDashboard);

export default router;
