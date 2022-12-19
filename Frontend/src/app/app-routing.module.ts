import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-area/admin-home/admin-home.component';
import { UpdateProductComponent } from './components/admin-area/update-product/update-product.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterBothStepsComponent } from './components/auth-area/register-both-steps/register-both-steps.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { OrderComponent } from './components/shopping-area/order-area/order/order.component';
import { ShoppingComponent } from './components/shopping-area/shopping/shopping.component';

const routes: Routes = [
    { path: "logout", component: LogoutComponent },
    { path: "register", component: RegisterBothStepsComponent },

    { path: "home", component: HomeComponent },
    { path: "shopping", component: ShoppingComponent },

    { path: 'admin-home', component: AdminHomeComponent },
    { path: 'admin/edit/:id', component: UpdateProductComponent },

    { path: 'order', component: OrderComponent},
    
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
