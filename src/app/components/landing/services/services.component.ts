import { Component, OnInit } from "@angular/core";
import { Service } from "./services.model";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    new Service(0, "monetization_on"),
    new Service(1, "grade"),
    new Service(2, "headset_mic")
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.services);
  }
}
