import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unsubscribe } from 'redux';
import { CartModel } from 'src/app/models/cart.model';
import { CredentialsModel } from 'src/app/models/credentials.model';
import { RoleEnum } from 'src/app/models/role.enum';
import { UserModel } from 'src/app/models/user.model';
import { authStore } from 'src/app/redux/auth.state';
import { cartsStore } from 'src/app/redux/carts.state';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public credentials = new CredentialsModel();
    public user: UserModel;
    public unsubscribe: Unsubscribe;
    public currentCart: CartModel;

    constructor(private authService: AuthService, private notify: NotifyService, private router: Router) { }

    ngOnInit() {
        this.user = authStore.getState().user;
        this.unsubscribe = authStore.subscribe(() => {
            this.user = authStore.getState().user;

            if (this.user !== null) {
                this.currentCart = cartsStore.getState().currentCart;
            }
        })
    }

    ngOnDestroy(): void {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    async submit() {
        try {
            await this.authService.login(this.credentials);

            this.notify.success("You are been logged in");

        } catch (err: any) {
            this.notify.error(err);
        }
    }
}
