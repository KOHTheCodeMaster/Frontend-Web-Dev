import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {Product} from "../shared/model/product.model";
import {DataLoaderService} from "./data-loader.service";
import {Subcategory} from "../shared/model/subcategory.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private allProductList: Product[];

    constructor(private dataLoaderService: DataLoaderService) {

        this.allProductList = [];

        this.initSubscriptions();

    }

    private initSubscriptions() {

        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => {

            //  Initialize Product List
            if (dataLoaded) {
                this.allProductList = this.dataLoaderService.getDataList('product').map(product =>
                    new Product(product['id'],
                        product['name'],
                        product['price'],
                        product['unitLabel'],
                        new Category(product['category']['id'], product['category']['name']),
                        new Subcategory(product['subcategory']['id'],
                            product['subcategory']['name'],
                            product['subcategory']['category']))
                );

            }

        });

    }

    public getProductListByCategoryId(categoryId: number): Product[] {

        //  Filter products by category id, Limit to 10 products
        return this.allProductList
            .filter(product => product.getCategory().getId() === categoryId);
            // .slice(0, 10);
    }

    public getProductListBySubcategoryId(subCategoryId: number): Product[] {
        //  Filter products by sub category id, Limit to 10 products
        return this.allProductList.filter(product => product.getSubcategory().getId() === subCategoryId)
    }


    //  Getters
    //  -------

    public getAllProductList(): Product[] {
        return this.allProductList;
    }

}
