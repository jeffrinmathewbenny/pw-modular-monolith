import 'reflect-metadata';
import { Container } from 'inversify';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { IProductService } from './core/types/product.types';
import { IUserService } from './core/types/user.types';

const TYPES = {
    IProductService: Symbol.for('IProductService'),
    IUserService: Symbol.for('IUserService')
};

const container = new Container();

container.bind<IProductService>(TYPES.IProductService).to(ProductService).inSingletonScope();
container.bind<IUserService>(TYPES.IUserService).to(UserService).inSingletonScope();

export { container, TYPES };