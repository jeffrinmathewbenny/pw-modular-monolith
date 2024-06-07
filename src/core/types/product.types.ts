export interface Product {
    id: number;
    name: string;
    price: number;
};

export interface IProductService {
  getAllProducts(): Product[];
  getProductById(id: number): Product | undefined;
  createProduct(product: Product): void;
  updateProduct(id: number, updatedProduct: Partial<Product>): void;
  deleteProduct(id: number): void;
}