import { Router } from "express";
import { getProducts, newProduct, removeProduct } from "../controllers/productController";
import productValidation from "../middlewares/productValidation";

const productRouter = Router();

productRouter.post('/products/add', productValidation, newProduct);
productRouter.delete('/products/:id/delete', removeProduct);
productRouter.get('/products', getProducts);

export default productRouter;