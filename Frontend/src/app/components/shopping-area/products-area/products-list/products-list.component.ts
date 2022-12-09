import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Unsubscribe } from 'redux';
import { ProductModel } from 'src/app/models/product.model';
import { RoleEnum } from 'src/app/models/role.enum';
import { authStore } from 'src/app/redux/auth.state';
import { categoriesStore } from 'src/app/redux/categories.state';
import { productsStore } from 'src/app/redux/products.state';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

    public products: ProductModel[];
    private unsubscribe: Unsubscribe;
    public role: RoleEnum;

    constructor(private productsService: ProductsService, private notify: NotifyService) { }

    async ngOnInit() {
        try {
            this.role = authStore.getState().user.role;

            this.products = await this.productsService.getAllProducts();

            this.unsubscribe = categoriesStore.subscribe(() => {
                const selectedCategoryId = categoriesStore.getState().selectedCategory;

                if(selectedCategoryId == "all") {
                }

                // Filter products by selected category
                if (selectedCategoryId != 'all') {
                    this.products = productsStore.getState().products.filter(p => p.categoryId === selectedCategoryId);
                } else {
                    this.products = productsStore.getState().products.filter(p => p.productName.toLowerCase().startsWith(productsStore.getState().searchText.toLowerCase()));
                }
            })
        } catch (err: any) {
            this.notify.error(err);
        }
    }

    ngOnDestroy(): void {
        if (this.unsubscribe) {
            this.unsubscribe()
        }
    }

    // ---------------------------------------------this is for user only: ----------------------------------------------
    @Output()
    public addProductEmit = new EventEmitter<ProductModel>();

    public addProduct(product: ProductModel) {
        this.addProductEmit.emit(product);
    }
}
