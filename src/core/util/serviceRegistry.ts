import { serviceLocator } from "./serviceLocator";
import { IProductService } from "../types/product.types";
import { ProductService } from "../../product/product.service";
import { IUserService } from "../types/user.types";
import { UserService } from "../../user/user.service";

class ServiceRegistry {
    public register(): void {
        const productService = new ProductService();
        const userService = new UserService();
        serviceLocator.register<IProductService>('IProductService', productService);
        serviceLocator.register<IUserService>('IUserService', userService);
    }
  }
  
  export const serviceRegistry = new ServiceRegistry();