import { Router } from "express";
import {
    deleteRobot,
    getRobots,
    createRobot,
    updateRobot,
} from "../controllers/robot.controller";

const router = Router();

router.get("/list", getRobots);

router.post("/create", createRobot);

router.delete("/delete/:id", deleteRobot);

router.patch("/edit/:id", updateRobot);

export default router;