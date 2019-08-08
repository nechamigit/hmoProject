export class Categories{
    categoriesId:number;
    hmoId:number;
    categoryName:string;
    parentCategory:number;
    categories:Categories;

    constructor(categoriesId,hmoId,categoryName,parentCategory,categories?){
        this.categoriesId=categoriesId;
        this.categoryName=categoryName;
        this.hmoId=hmoId;
        this.parentCategory=parentCategory;
        this.categories=categories;
    }
}  
 