import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
    providedIn: 'root'
})
export class NotifyService {

    constructor() { }

    private notify = new Notyf({
        position: { x: "right", y: "bottom" },
        types: [
            {
                type: 'success',
                duration: 4000,
                background: 'blue',
                dismissible: true,
            },
            {
                type: 'error',
                duration: 7000,
                dismissible: true,
            }
        ]
    });

    public success(message: string): void {
        this.notify.success(message);
    }

    public error(err: string): void {
        const message = this.extractErrorMessage(err);
        this.notify.error(message);
    }

    private extractErrorMessage(err: any): string {
        if (typeof err === "string") return err;

        if (typeof err.response?.data === "string") return err.response.data;

        if (Array.isArray(err.response.data)) return err.response.data[0];

        if (typeof err.message === "string") return err.message;

        console.log(err);
        return "Some error occurred, please try again"
    }
}
