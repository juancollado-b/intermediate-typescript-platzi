import { faker } from '@faker-js/faker';
import {
    CreateProductDto,
    findProductsDto,
    UpdateProductDto,
} from './product.dto';
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

export const updateProduct = (
    id: string,
    changes: UpdateProductDto
): Product => {
    const productIndex = products.findIndex((product) => product.id == id);
    if (productIndex === -1) {
        throw 'Product Not Found';
    }

    const prevData = products[productIndex];
    products[productIndex] = {
        ...prevData,
        ...changes,
    };

    return products[productIndex];
};

export const findProducts = (dto: findProductsDto): Product[] => {
    return products;
};
