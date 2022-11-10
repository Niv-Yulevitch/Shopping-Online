import { AreaModel } from "./area-model";

export class SiteModel {
    public _id: string;
    public siteName: string;
    public description: string;
    public areaId: string;
    public adultPrice: number;
    public childPrice: number;
    public area: AreaModel;
}