import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter.js";


dotenv.config();

database.init();


const server = express();

server.listen(process.env.PORT, () => {

    console.log("server is listening");
});

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());

server.use("/user", userRouter);