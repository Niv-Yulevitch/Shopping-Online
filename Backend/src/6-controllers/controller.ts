// import express, { NextFunction, Request, Response } from "express";
// import { SiteModel } from "../4-models/site-model";
// import logic from "../5-logic/logic";

// const router = express.Router();

// // GET http://localhost:3001/api/areas
// router.get("/areas", async (request: Request, response: Response, next: NextFunction) => {
//     try {
//         const areas = await logic.getAllAreas();
//         response.json(areas);
//     }
//     catch (err: any) {
//         next(err);
//     }
// });

// // GET http://localhost:3001/api/sites-by-area/:areaId
// router.get("/sites-by-area/:areaId", async (request: Request, response: Response, next: NextFunction) => {
//     try {
//         const areaId = request.params.areaId;
//         const sites = await logic.getSitesByArea(areaId);
//         response.json(sites);
//     }
//     catch (err: any) {
//         next(err);
//     }
// });

// // POST http://localhost:3001/api/sites
// router.post("/sites", async (request: Request, response: Response, next: NextFunction) => {
//     try {
//         const site = new SiteModel(request.body);
//         const addedSite = await logic.addSite(site);
//         response.status(201).json(addedSite);
//     }
//     catch (err: any) {
//         next(err);
//     }
// });

// // DELETE http://localhost:3001/api/sites/:_id
// router.delete("/sites/:_id", async (request: Request, response: Response, next: NextFunction) => {
//     try {
//         const _id = request.params._id;
//         await logic.deleteSite(_id);
//         response.sendStatus(204);
//     }
//     catch (err: any) {
//         next(err);
//     }
// });

// export default router;