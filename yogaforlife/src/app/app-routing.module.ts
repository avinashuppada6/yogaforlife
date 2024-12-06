import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ExpertguidanceComponent } from './expertguidance/expertguidance.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'expertguidance',component:ExpertguidanceComponent},
  {path:'**',component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
