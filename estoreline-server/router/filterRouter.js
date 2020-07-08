import express from "express";
import { getProductFilters } from "../controller/FilterController";

let router = express.Router();

router.get("/", getProductFilters);

export default router;
