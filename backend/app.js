import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb://admin:dnXVsElAut11D6pJ@ac-pyn8d86-shard-00-00.nztgxtu.mongodb.net:27017,ac-pyn8d86-shard-00-01.nztgxtu.mongodb.net:27017,ac-pyn8d86-shard-00-02.nztgxtu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ees1py-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(
    console.log("connected to database and listening to local host at 5000")
  )
  .catch((err) => console.log(err));

//dnXVsElAut11D6pJ
