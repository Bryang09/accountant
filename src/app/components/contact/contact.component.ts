import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  get email() {
    return this.myForm.get("email");
  }
  get firstName() {
    return this.myForm.get("firstName");
  }
  get lastName() {
    return this.myForm.get("lastName");
  }
  get password() {
    return this.myForm.get("password");
  }
  get age() {
    return this.myForm.get("age");
  }
}
