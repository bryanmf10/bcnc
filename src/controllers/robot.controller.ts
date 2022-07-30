import { Request, Response } from "express"
import Robot from "../models/robot.model"

export const getRobots = async (_req: Request, res: Response) => {
    try {
        const robots = await Robot.find();
        res.status(200).json(robots);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createRobot = async (req: Request, res: Response) => {
    try {
        const { id, title, description } = req.body;
        const robot = new Robot({ id, title, description });
        await robot.save();
        res.status(201).json(robot);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

export const deleteRobot = async (req: Request, _res: Response) => {
    try {
        const { id } = req.params;
        const idItem = +id;
        await Robot.findByIdAndRemove(idItem);
    } catch (error) {
        console.log(error);
    }
};

export const updateRobot = async (req: Request, _res: Response) => {
    const { id } = req.params;
    const idItem = +id;
    const { title, description } = req.body
    const newRobot = { 
        $set:{title, description }
    }
    await Robot.findByIdAndUpdate(idItem, newRobot);
}