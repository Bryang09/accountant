import { Component, OnInit } from "@angular/core";
import { Nav } from "./nav.model";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  navs: Nav[] = [
    new Nav("About", true, "about"),
    new Nav("Careers", true, "careers"),
    new Nav("Services", true, "services"),
    new Nav("Contact", false, "contact")
  ];

  burger: boolean = false;

  constructor() {}

  ngOnInit() {
    console.log(this.navs);
    console.log(this.burger);
  }

  onBurger() {
    this.burger = !this.burger;
    console.log(this.burger);
  }
}
