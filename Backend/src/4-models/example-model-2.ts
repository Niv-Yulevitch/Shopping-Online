// import mongoose from "mongoose";
// import { AreaModel } from "./area-model";

// //* Interface:
// export interface ISiteModel extends mongoose.Document {
//     siteName: string;
//     description: string;
//     areaId: mongoose.Schema.Types.ObjectId; // Foreign key
//     adultPrice: number;
//     childPrice: number;
// }

// //* Schema:
// export const SiteSchema = new mongoose.Schema<ISiteModel>({
//     siteName: String,
//     description: String,
//     areaId: mongoose.Schema.Types.ObjectId,
//     adultPrice: Number,
//     childPrice: Number
// }, {
//     versionKey: false,
//     toJSON: { virtuals: true },
//     id: false
// });

// SiteSchema.virtual("area", {
//     ref: AreaModel,
//     localField: "areaId",
//     foreignField: "_id",
//     justOne: true
// })

// //* Model:
// export const SiteModel = mongoose.model<ISiteModel>("SiteModel", SiteSchema, "sites");