import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-shopping-info',
    templateUrl: './shopping-info.component.html',
    styleUrls: ['./shopping-info.component.css']
})
export class ShoppingInfoComponent implements OnInit {

    numberOfProducts: number;

    constructor(private productsService: ProductsService, private notify: NotifyService) { }

    async ngOnInit() {

        try {
            this.numberOfProducts = await this.productsService.countProducts();
        } catch (err: any) {
            this.notify.error(err);
        }

    }

}
