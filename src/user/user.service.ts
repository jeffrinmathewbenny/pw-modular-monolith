import { UserModel } from "./user.model";
import { serviceLocator } from "../core/util/serviceLocator";
import { IProductService, Product } from "../core/types/product.types";
import { User, IUserService } from "../core/types/user.types";

export class UserService implements IUserService {
    private userModel: UserModel;
    private productService: IProductService;

    constructor() {
        this.userModel = new UserModel();
        this.productService = serviceLocator.get<IProductService>('IProductService');
    }

    public getAllUsers(): User[] {
        return this.userModel.getAllUsers();
    }

    public getUserById(id: number): User | undefined {
        return this.userModel.getUserById(id);
    }

    public createUser(user: User): void {
        this.userModel.createUser(user);
    }

    public updateUser(id: number, updatedUser: Partial<User>): void {
        this.userModel.updateUser(id, updatedUser);
    }

    public deleteUser(id: number): void {
        this.userModel.deleteUser(id);
    }

    public getUserWithProductDetails(userId: number, productId: number): { user: User, product: Product | undefined } | undefined {
      const user = this.getUserById(userId);
      console.log(user)
      if (!user) {
          return undefined
      }
      const product = this.productService.getProductById(productId);
      return { user, product };
    }

}