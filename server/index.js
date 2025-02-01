import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 7000;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
        .then(()=>{
            console.log("DB connected successfully");
            app.listen(port, ()=>{
                console.log(`Server is running on ${port}`);
            })
        })
        .catch((error)=> console.log(error));

app.use("/api",route);
