import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    // public async getAllAreas(): Promise<AreaModel[]> {
    //     const observable = this.http.get<AreaModel[]>(environment.areasUrl);
    //     return await firstValueFrom(observable);
    // }

    // public async getSitesByArea(areaId: string): Promise<SiteModel[]> {
    //     const observable = this.http.get<SiteModel[]>(environment.sitesByAreaUrl + areaId);
    //     return await firstValueFrom(observable);
    // }

    // public async addSite(site: SiteModel): Promise<SiteModel> {
    //     const observable = this.http.post<SiteModel>(environment.sitesUrl, site);
    //     return await firstValueFrom(observable);
    // }

    // public async deleteSite(_id: string): Promise<void> {
    //     const observable = this.http.delete(environment.sitesUrl + _id);
    //     await firstValueFrom(observable);
    // }
}
