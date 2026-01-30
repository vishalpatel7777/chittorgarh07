import express from "express";
import { IpoController } from "../controllers/ipo.controller.js";

const router = express.Router();

router.get("/mainboard", IpoController.getMainboardIpos);

export default router;
