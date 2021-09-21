import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter.js";
import authenticateRouter from "./router/authenticateRouter.js";
import cors from "cors";
import fileUpload from "express-fileupload";



dotenv.config();

database.init();


const server = express();

server.listen(process.env.PORT, () => {

    console.log("server is listening");
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());
server.use(fileUpload({
    useTempFiles:true
}));

server.use("/user", userRouter);
server.use("/user", authenticateRouter);