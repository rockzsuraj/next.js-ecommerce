export interface CategoryProductsList {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       Name;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}

export enum Name {
    Shoes = "Shoes",
}