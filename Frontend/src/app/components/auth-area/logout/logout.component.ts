import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-logout',
    template: ""
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService, private notify: NotifyService, private router: Router, private productsService: ProductsService) { }

    ngOnInit(): void {
        this.productsService.setSelectedCategory("all");
        this.authService.logout();
        this.notify.success("You are logged-out");
        this.router.navigateByUrl("/home");
    }

}
