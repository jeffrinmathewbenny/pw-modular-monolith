import { Router } from "express";
import { container } from "../inversify.config";
import { ProductController } from "./product.controller";


export class ProductRoutes {
    public router: Router;
    private productController: ProductController;

    constructor() {
        this.router = Router();
        this.productController = container.get<ProductController>(ProductController);
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.productController.getAllProducts);
        this.router.get('/:id', this.productController.getProductById);
        this.router.post('/', this.productController.createProduct);
        this.router.put('/:id', this.productController.updateProduct);
        this.router.delete('/:id', this.productController.deleteProduct);
    }
}