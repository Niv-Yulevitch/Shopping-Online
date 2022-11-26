import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import { UserModel } from "../models/user.model";

export class AuthState {
    public user: UserModel = null
    public token: string = null;

    constructor () {
        this.token = localStorage.getItem("token");
        if (this.token) {
            const container: { user: UserModel } = jwtDecode(this.token);
            this.user = container.user;
        }
    }
}

// Action Types:
export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// An action that is sent with dispatch:
export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = {...currentState};

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload;
            const container: { user: UserModel } = jwtDecode(newState.token);
            newState.user = container.user;
            localStorage.setItem("token", newState.token);
            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    return newState;
}

export const authStore = createStore(authReducer);