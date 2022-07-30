import express from "express";
import morgan from "morgan";
import path from "path";
import { PORT } from "./config";

import indexRoutes from "./routes/index.routes";
import robotsRoutes from "./routes/robots.routes";

export class Application {
    app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", indexRoutes);
        this.app.use("/robot", robotsRoutes);
        this.app.use(express.static(path.join(__dirname, "public")));
    }

    start(): void {
        this.app.listen(PORT, () => {
            console.log("Server is running at", PORT);
        });
    }
}


