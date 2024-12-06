import { Component } from '@angular/core';

@Component({
  selector: 'app-expertguidance',
  templateUrl: './expertguidance.component.html',
  styleUrls: ['./expertguidance.component.css']
})
export class ExpertguidanceComponent {
        id?:string;
        title!:string;
        thumbnail!:string;
        banner!:string;
        headings!:string;
        description!:string;
        subdescription!:string;
        feedback!:string;
        rating!:number;
}
