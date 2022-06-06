import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
    const NOW = new Date();
    const newProduct: Product = {
        ...data,
        createdAt: NOW,
        updatedAt: NOW,
        id: faker.datatype.uuid(),
        category: {
            id: data.categoryId,
            createdAt: NOW,
            updatedAt: NOW,
            name: faker.commerce.department(),
        },
    };
    products.push(newProduct);
    return newProduct;
};
