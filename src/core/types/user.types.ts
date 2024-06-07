import { Product } from "./product.types";

export interface User {
    id: number;
    name: string;
};

export interface IUserService {
    getAllUsers(): User[];
    getUserById(id: number): User | undefined;
    createUser(user: User): void;
    updateUser(id: number, updatedUser: Partial<User>): void;
    deleteUser(id: number): void;
    getUserWithProductDetails(userId: number, productId: number): { user: User, product: Product | undefined } | undefined;
  }