import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./components/landing/hero/hero.component";
import { ServicesComponent } from "./components/landing/services/services.component";
import { NewsletterComponent } from "./components/landing/newsletter/newsletter.component";

import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NavComponent } from "./components/nav/nav.component";
import { AboutComponent } from "./components/about/about.component";
import { LandingComponent } from "./components/landing/landing.component";
import { CareersComponent } from "./components/careers/careers.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ServiceComponent } from "./components/service/service.component";
import { AboutHeroComponent } from "./components/about/about-hero/about-hero.component";
// import {} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ServicesComponent,
    NewsletterComponent,
    NavComponent,
    AboutComponent,
    LandingComponent,
    CareersComponent,
    ContactComponent,
    ServiceComponent,
    AboutHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
