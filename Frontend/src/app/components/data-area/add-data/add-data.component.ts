import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

    // public areas: AreaModel[];
    // public site = new SiteModel();

    constructor(private dataService: DataService, private router: Router) { }

    async ngOnInit() {
        // try {
        //     this.areas = await this.dataService.getAllAreas();
        // } catch (err: any) {
        //     alert(err.message);
        // }
    }

    public async send() {
        // try {
        //     await this.dataService.addSite(this.site);
        //     alert("Site has been added!");
        //     this.router.navigateByUrl("/list");
        // } catch (err: any) {
        //     alert(err.message)
        // }
    }

}
