import { Router } from "express";
import { getProducts, newProduct, removeProduct, getProductById, updateProduct } from "../controllers/productController";
import productValidation from "../middlewares/productValidation";

const productRouter = Router();

productRouter.post('/products/add', productValidation, newProduct);
productRouter.delete('/products/:id/delete', removeProduct);
productRouter.get('/products', getProducts);
productRouter.get('/products/:id', getProductById);
productRouter.put('/products/update/:id', updateProduct);

export default productRouter;