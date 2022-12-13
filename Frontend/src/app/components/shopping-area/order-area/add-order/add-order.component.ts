import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CityEnum } from 'src/app/models/city.enum';
import { OrderModel } from 'src/app/models/order.model';
import { UserModel } from 'src/app/models/user.model';
import { authStore } from 'src/app/redux/auth.state';
import { cartsStore } from 'src/app/redux/carts.state';
import { NotifyService } from 'src/app/services/notify.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
    selector: 'app-add-order',
    templateUrl: './add-order.component.html',
    styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

    public CityEnum = CityEnum;
    public user: UserModel;
    public order = new OrderModel();
    public cartId: string;

    public today: Date = new Date();
    public currentYear: number = this.today.getFullYear();
    public currentMonth: number = this.today.getMonth();
    public currentDay: number = this.today.getDate();
    public minDate: Object = new Date(this.currentYear, this.currentMonth, this.currentDay);

    public maxDate: Object = new Date(this.currentYear, this.currentMonth + 1, this.currentDay);

    constructor(private ordersService: OrdersService, private router: Router, private notifyService: NotifyService, public dialog: MatDialog) { }

    //* This function prevents saturdays and sundays:
    dateFilter(date: any) {
        const day = date?.getDay()
        return day !== 0 && day !== 6;
    }

    async ngOnInit() {
        this.user = authStore.getState().user;
    }

    async addOrder() {
        try {
            this.cartId = cartsStore.getState().currentCart._id;
            this.order.cartId = this.cartId;
            this.order.userId = this.user._id;

            await this.ordersService.addOrder(this.order);
            this.notifyService.success("Order has been added");

            let dialogRef = this.dialog.open(OrderDialogComponent);
            dialogRef.afterClosed().subscribe((result) => {
                if (result === undefined) {
                    this.router.navigateByUrl('/shopping');
                }
            })
        } catch (err: any) {
            this.notifyService.error(err);
        }

    }

    doubleClickToPopulate() {
        this.order.deliveryCity = this.user.city;
        this.order.deliveryStreet = this.user.street;
    }

}
