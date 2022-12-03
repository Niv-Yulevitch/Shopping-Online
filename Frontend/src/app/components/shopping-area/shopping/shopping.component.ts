import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/models/role.enum';
import { UserModel } from 'src/app/models/user.model';
import { authStore } from 'src/app/redux/auth.state';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

    public user: UserModel;
    public opened: boolean = true;

    constructor(private router: Router) { }

    ngOnInit(): void {
        // Check the role of user:
        this.user = authStore.getState().user;
        
        // If the role is for admin -> navigate to admin area:
        if (this.user.role == RoleEnum.Admin) {
          this.router.navigateByUrl('/admin-home');
        }
    }

}
