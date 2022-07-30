import{config}from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
export const PORT = process.env.PORT || 3000;

