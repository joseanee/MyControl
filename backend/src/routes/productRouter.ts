import { Router } from "express";
import { getProducts, newProduct } from "../controllers/productController";
import productValidation from "../middlewares/productValidation";

const productRouter = Router();

productRouter.post('/products/add', productValidation, newProduct);
productRouter.get('/products', getProducts);;

export default productRouter;