import express, { Request, Response, NextFunction } from "express";
import * as adminController from "../controller/details";

const router = express.Router();

router.get("/", adminController.getCoinsAll);

export default router;