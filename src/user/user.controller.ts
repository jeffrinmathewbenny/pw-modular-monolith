import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { IUserService } from "../core/types/user.types";
import { TYPES } from "../inversify.config";

@injectable()
export class UserController {
    private userService: IUserService;

    constructor(@inject(TYPES.IUserService) userService: IUserService) {
        this.userService = userService;
    }

    public getAllUsers = (_req: Request, res: Response): void => {
        const users = this.userService.getAllUsers();
        res.json(users);
    }

    public getUserById = (req: Request, res: Response): void => {
        const userId = parseInt(req.params.id, 10);
        const user = this.userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send(`User with ID ${userId} not found`);
        }
    }

    public createUser = (req: Request, res: Response): void => {
      const newUser = req.body;
      this.userService.createUser(newUser);
      res.status(201).send('User created');
    }

    public updateUser = (req: Request, res: Response): void => {
      const userId = parseInt(req.params.id, 10);
      const updatedUser = req.body;
      this.userService.updateUser(userId, updatedUser);
      res.send('User updated');
    }

    public deleteUser = (req: Request, res: Response): void => {
      const userId = parseInt(req.params.id, 10);
      this.userService.deleteUser(userId);
      res.send('User deleted');
    }

    public getUserWithProductDetails = (req: Request, res: Response) => {
      const userId = parseInt(req.params.userId, 10);
      const productId = parseInt(req.params.productId, 10);
      const result = this.userService.getUserWithProductDetails(userId, productId);
      if (result) {
        res.json(result);
      } else {
        res.status(404).send(`User with ID ${userId} and Product with ID ${productId} not found`);
      }
    }
}