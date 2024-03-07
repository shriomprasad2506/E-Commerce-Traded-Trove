import express from "express"
import asyncHandler from "../middleware/asyncHandler.js"
const router = express.Router()
import { getProducts, getProductsById } from "../controllers/productController.js"

router.route('/').get(getProducts)
router.route('/:id').get(getProductsById)

export default router