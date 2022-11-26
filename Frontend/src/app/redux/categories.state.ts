import { createStore } from "redux";
import { CategoryModel } from "../models/category.model";

export class CategoriesState {
    public categories: CategoryModel[] = [];
}

export enum CategoriesActionType {
    FetchProducts = "FetchProducts"
}

export interface CategoriesAction {
    type: CategoriesActionType;
    payload?: any;
}

export function categoriesReducer(currentState = new CategoriesState(), action: CategoriesAction): CategoriesState {
    const newState = {...currentState};

    switch (action.type) {
        case CategoriesActionType.FetchProducts:
            newState.categories = action.payload;
            break;
    }

    return newState;
}

export const categoriesStore = createStore(categoriesReducer);