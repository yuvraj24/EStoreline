import express from "express";
import {getProductsForCategory}  from '../controller/ProductController.js'

let router = express.Router();

router.get("/:id", getProductsForCategory);

export default router;
