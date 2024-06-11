import { Router } from "express";
import { container, TYPES } from "../inversify.config";
import { UserController } from "./user.controller";
import { IUserService } from "../core/types/user.types";

export class UserRoutes {
    public router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        const userService = container.get<IUserService>(TYPES.IUserService);
        this.userController = new UserController(userService);
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.userController.getAllUsers);
        this.router.get('/:id', this.userController.getUserById);
        this.router.post('/', this.userController.createUser);
        this.router.put('/:id', this.userController.updateUser);
        this.router.delete('/:id', this.userController.deleteUser);
        this.router.get('/:userId/products/:productId', this.userController.getUserWithProductDetails);
    }
}