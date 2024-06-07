
import { Product } from "../core/types/product.types";

export class ProductModel {
    private products: Product[] = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ];

    public getAllProducts(): Product[] {
        return this.products;
    }

    public getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    public createProduct(product: Product): void {
        this.products.push(product);
    }

    public updateProduct(id: number, updatedProduct: Partial<Product>): void {
        const product = this.products.find(product => product.id === id);
        if (product) {
            Object.assign(product, updatedProduct);
        }
    }

    public deleteProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }
}