export class productDetails {
    name: string;
    description: string;
    imag: boolean;
    categoryId: number;
    price: number;
    insurance: string;
    hmo: string;
    hmoId: number;
    parentCategory: number;
    productId: number;
    priceId: number;
    categoryName: string;

    constructor(name?, description?, imag?, price?, insurance?, hmo?, categoryId?, hmoId?, categoryName?) {
        this.description = description;
        this.name = name;
        this.imag = imag;
        this.insurance = insurance;
        this.price = price;
        this.hmo = hmo;
        this.categoryId = categoryId;
        this.hmoId = hmoId;
        this.categoryName = categoryName;
    }
}
