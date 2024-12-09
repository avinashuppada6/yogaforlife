import { Component } from '@angular/core';
import { ExpertguidancecomponentService } from '../services/expertguidancecomponent.service';
import { Expertguidancecomponent } from '../models/expertguidancecomponent';

@Component({
  selector: 'app-expertguidance',
  templateUrl: './expertguidance.component.html',
  styleUrls: ['./expertguidance.component.css']
})
export class ExpertguidanceComponent {
  details :Expertguidancecomponent[]=[];
   constructor(private service:ExpertguidancecomponentService){}
   ngOnInit():void{
    this.service.onsubmit().subscribe(data=>this.details=data);
   }
}
