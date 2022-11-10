// import { AreaModel, IAreaModel } from "../4-models/area-model";
// import { ISiteModel, SiteModel } from "../4-models/site-model";

// async function getAllAreas(): Promise<IAreaModel[]> {
//     return AreaModel.find().exec();
// }

// async function getSitesByArea(areaId: string): Promise<ISiteModel[]> {
//     return SiteModel.find({ areaId }).populate("area").exec();
// }

// async function addSite(site: ISiteModel): Promise<ISiteModel> {
//     return site.save();
// }

// async function deleteSite(_id: string): Promise<void> {
//     await SiteModel.findByIdAndDelete(_id).exec();
// }

// export default {
//     getAllAreas,
//     getSitesByArea,
//     addSite,
//     deleteSite
// };