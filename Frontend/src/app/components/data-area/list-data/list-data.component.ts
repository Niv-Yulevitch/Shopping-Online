import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
    
    public areas: AreaModel[];
    public sites: SiteModel[];

    constructor(private dataService: DataService) { }

    async ngOnInit() {
        try {
            this.areas = await this.dataService.getAllAreas();
        } catch (err: any) {
            alert(err.message);
        }
    }

    public async getSites(args: Event) {
        try {
            const areaId = (args.target as HTMLSelectElement).value;
            this.sites = await this.dataService.getSitesByArea(areaId);
        } catch (err: any) {
            alert(err.message);
        }
    }

    public async deleteSite(_id: string) {
        try {
            const ok = window.confirm("האם אתה בטוח?");
            if(!ok) return;

            await this.dataService.deleteSite(_id);
            
            const index = this.sites.findIndex(s => s._id === _id);
            this.sites.splice(index, 1);
        } catch (err: any) {
            alert(err.message);            
        }
    }

}
