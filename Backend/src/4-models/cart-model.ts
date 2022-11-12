import { timeStamp } from "console";
import mongoose from "mongoose";
import { UserModel } from "./user-model";

export interface ICartModel extends mongoose.Document {
    userId: mongoose.Schema.Types.ObjectId;
    isClosed: boolean;
}

export const CartSchema = new mongoose.Schema<ICartModel>({
    userId: mongoose.Schema.Types.ObjectId,
    isClosed: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    toJSON: {virtuals: true},
    id: false,
    timestamps: true
});

CartSchema.virtual('user', {
    ref: UserModel,
    localField: "userId",
    foreignField: "_id",
    justOne: true
});

export const CartModel = mongoose.model<ICartModel>("CartModel", CartSchema, "carts");