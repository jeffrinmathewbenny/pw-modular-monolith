import { Application } from "express";
import { UserRoutes } from "./user/user.routes";
import { ProductRoutes } from "./product/product.routes";
import { serviceRegistry } from "./core/util/serviceRegistry";

serviceRegistry.register();

const userRoutes = new UserRoutes();
const productRoutes = new ProductRoutes();

export const addRoutes = (app: Application) : Application => {
    app.use('/users', userRoutes.router);
    app.use('/products', productRoutes.router)
    return app;
};