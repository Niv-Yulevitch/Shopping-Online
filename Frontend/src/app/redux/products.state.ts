import { createStore } from "redux";
import { ProductModel } from "../models/product.model";

export class ProductsState {
    public products: ProductModel[] = [];
}

export enum ProductsActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct"
}

export interface ProductsAction {
    type: ProductsActionType;
    payload?: any;
}

export function productsReducer(currentState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = {...currentState};

    switch (action.type) {
        case ProductsActionType.FetchProducts:
            newState.products = action.payload;
            break;

        case ProductsActionType.AddProduct:
            newState.products.push(action.payload);
            break;

        case ProductsActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p._id === action.payload._id)
            if(indexToUpdate >= 0) {
                newState.products[indexToUpdate] = action.payload;
            }
            break;
    }

    return newState;
}

export const productsStore = createStore(productsReducer);