import { Router } from "express";
import { UserController } from "./user.controller";

export class UserRoutes {
    public router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
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