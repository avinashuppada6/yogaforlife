import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ExpertguidanceComponent } from './expertguidance/expertguidance.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    SliderComponent,
    FaqsComponent,
    FooterComponent,
    ContactusComponent,
    ProfileComponent,
    AboutusComponent,
    HomeComponent,
    ExpertguidanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
