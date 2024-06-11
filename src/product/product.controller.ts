import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { IProductService } from "../core/types/product.types";
import { TYPES } from "../inversify.config";

@injectable()
export class ProductController {
    private productService: IProductService;

    constructor(@inject(TYPES.IProductService) productService: IProductService) {
        this.productService = productService;
    }

    public getAllProducts = (_req: Request, res: Response): void => {
        const products = this.productService.getAllProducts();
        res.json(products);
    }

    public getProductById = (req: Request, res: Response): void => {
        const productId = parseInt(req.params.id, 10);
        const product = this.productService.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send(`Product with ID ${productId} not found`);
        }
    }

    public createProduct = (req: Request, res: Response): void => {
      const newProduct = req.body;
      this.productService.createProduct(newProduct);
      res.status(201).send('Product created');
    }

    public updateProduct = (req: Request, res: Response): void => {
      const productId = parseInt(req.params.id, 10);
      const updatedProduct = req.body;
      this.productService.updateProduct(productId, updatedProduct);
      res.send('Product updated');
    }

    public deleteProduct = (req: Request, res: Response): void => {
      const productId = parseInt(req.params.id, 10);
      this.productService.deleteProduct(productId);
      res.send('Product deleted');
    }
}