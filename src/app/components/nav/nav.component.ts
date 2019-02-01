import { Component, OnInit } from "@angular/core";
import { Nav } from "./nav.model";
import { Router } from "@angular/router";

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
  url: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.url = this.router.url;
    console.log(this.navs);
    console.log(this.burger);
    console.log(this.url);
  }

  onBurger() {
    this.burger = !this.burger;
    console.log(this.burger);
  }
}
