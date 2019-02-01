import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-newsletter",
  templateUrl: "./newsletter.component.html",
  styleUrls: ["./newsletter.component.scss"]
  // encapsulation: ViewEncapsulation.None
})
export class NewsletterComponent implements OnInit {
  myForm: FormGroup;
  title: string;
  submit: boolean = false;
  disabled: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])]
    });

    this.myForm.valueChanges.subscribe(console.log);

    this.title = "sign up for our newsletter";

    this.disabled = this.myForm.value.length > 0 ? false : true;
    console.log(`Disabled: ${this.disabled}`);
    console.log(`Submit: ${this.submit}`);
    // console.log(this.disabled);
    // console.log(this.myForm.value.email);
    // console.log(this.myForm.value.length > 0);
    console.log(`Email: ${this.email}`);
  }

  onSubmit() {
    this.submit = true;
    console.log(`Disabled: ${this.disabled}`);
    console.log(`Submit: ${this.submit}`);
  }

  onChange() {
    this.disabled = this.myForm.value.email.length > 0 ? false : true;
    console.log(`Disabled: ${this.disabled}`);
    console.log(`Submit: ${this.submit}`);
  }

  get email() {
    return this.myForm.get("email");
  }
}
