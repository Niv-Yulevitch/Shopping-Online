import { CartModel } from "./cart.model";
import { CityEnum } from "./city.enum";
import { UserModel } from "./user.model";

export class OrderModel {
    finalPrice: number;
    deliveryCity: CityEnum;
    deliveryStreet: string;
    deliveryDate: Date;
    CreditCard: number;
    userId: string;
    user: UserModel;
    cartId: string;
    cart: CartModel
}