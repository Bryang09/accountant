import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { LandingComponent } from "./components/landing/landing.component";
import { CareersComponent } from "./components/careers/careers.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ServiceComponent } from "./components/service/service.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "about", component: AboutComponent },
  { path: "careers", component: CareersComponent },
  { path: "services", component: ServiceComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
