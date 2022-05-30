import { BaseModel } from '../base.model';
import { Category } from './../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
    category: Category;
}
