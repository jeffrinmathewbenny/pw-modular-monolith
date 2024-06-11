import { injectable } from "inversify";
import { ProductModel } from "./product.model";
import { Product, IProductService } from '../core/types/product.types'

@injectable()
export class ProductService implements IProductService{
    private productModel: ProductModel;

    constructor() {
        this.productModel = new ProductModel();
    }

    public getAllProducts(): Product[] {
        return this.productModel.getAllProducts();
    }

    public getProductById(id: number): Product | undefined {
        return this.productModel.getProductById(id);
    }

    public createProduct(product: Product): void {
        this.productModel.createProduct(product);
    }

    public updateProduct(id: number, updatedProduct: Partial<Product>): void {
        this.productModel.updateProduct(id, updatedProduct);
    }

    public deleteProduct(id: number): void {
        this.productModel.deleteProduct(id);
    }
} 