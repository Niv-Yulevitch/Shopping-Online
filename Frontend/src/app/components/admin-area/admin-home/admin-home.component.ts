import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from 'redux';
import { CategoryModel } from 'src/app/models/category.model';
import { ProductModel } from 'src/app/models/product.model';
import { UserModel } from 'src/app/models/user.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit, OnDestroy {
    public user: UserModel;
    private unsubscribe: Unsubscribe;
    public opened = false;

    public products: ProductModel[];
    public categories: CategoryModel[];
    public editedProduct: ProductModel;
    public isAddAction: boolean;

    constructor(private productsService: ProductsService, private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
            //* Now I have all the program filled with all that I need for the rest of the child components - if we have the products already will get from store instead of backend:
            this.products = await this.productsService.getAllProducts();
            this.categories = await this.productsService.getAllCategories();

        } catch (err: any) {
            this.notifyService.error(err);
        }
    }

    ngOnDestroy(): void {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    productToEdit(product: ProductModel) {
        this.isAddAction = false;
        this.editedProduct = null;
        this.editedProduct = product;
        this.opened = true;
    }
}