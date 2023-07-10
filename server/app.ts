import express, { Request, Response } from "express";
import adminRouter from "./routes/details";
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/details", adminRouter);

app.listen(8080)