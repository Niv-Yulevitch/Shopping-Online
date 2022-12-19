import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CityEnum } from 'src/app/models/city.enum';
import { OrderModel } from 'src/app/models/order.model';
import { UserModel } from 'src/app/models/user.model';
import { authStore } from 'src/app/redux/auth.state';
import { cartsStore } from 'src/app/redux/carts.state';
import { ordersStore } from 'src/app/redux/orders.state';
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
    public minDate: Date = new Date(this.currentYear, this.currentMonth, this.currentDay);
    public maxDate: Date = new Date(this.currentYear, this.currentMonth + 1, this.currentDay);

    public orders: OrderModel[];
    public blockedDates: Date[] = [new Date("19/12/2022"),new Date("20/12/2022"),new Date("21/12/2022"),new Date("22/12/2022")];

    constructor(private ordersService: OrdersService, private router: Router, private notifyService: NotifyService, public dialog: MatDialog) { }

    async ngOnInit() {
        this.user = authStore.getState().user;

        this.orders = ordersStore.getState().orders;
        // this.blockedDates = this.isFullBooked(this.orders.filter(o => { o.deliveryDate }));
    }
    
    //* This function prevents fridays and saturdays:
    dateFilter(date: any) {
        const day = date?.getDay()
        return day !== 5 && day !== 6;
    }

      
    // dateFilter(d: Date): boolean {
    //     const day = d?.getDay()
    //     if (day === 5 || day === 6) {
    //         return false;
    //     }

    //     let date = moment(d);
    //     if (this.blockedDates) {
    //         return !this.blockedDates.find(x => {
    //             console.log(moment(x).isSame(date, 'day'));
    //             return moment(x).isSame(date, 'day');
    //         });
    //     }

    //     return true;
    // }

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

    // isFullBooked(array: any[]): Date[] {
    //     const blockedDates: Date[] = [];
    //     const a = array.reduce((obj, b) => {
    //         obj[b] = ++obj[b] || 1;
    //         return obj
    //     }, {})

    //     for (const [key, value] of Object.entries(a)) {
    //         if (value >= 3) {
    //             blockedDates.push(new Date(key));
    //         }
    //     }

    //     return blockedDates;
    // }

}