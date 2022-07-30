import { Schema, model } from "mongoose";
const RobotSchema = new Schema({
    id: Number,
    title: String,
    description: String
});

export default model("Robot", RobotSchema);