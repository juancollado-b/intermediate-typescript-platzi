import { faker } from '@faker-js/faker';
import { addProduct, products } from './products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        description: faker.commerce.productDescription(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({ min: 10, max: 10000 }),
        categoryId: faker.datatype.uuid(),
        image: faker.image.imageUrl(),
        color: faker.color.rgb(),
        price: parseInt(faker.commerce.price(), 10),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(),
        size: faker.helpers.arrayElement(['S', 'M', 'L']),
    });
}

console.log('PRODUCTOS', products);
