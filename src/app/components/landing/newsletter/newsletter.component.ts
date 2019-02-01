import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-newsletter",
  templateUrl: "./newsletter.component.html",
  styleUrls: ["./newsletter.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterComponent implements OnInit {
  myForm: FormGroup;
  title: string;
  submit: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ""
    });

    this.myForm.valueChanges.subscribe(console.log);

    this.title = "sign up for our newsletter";
    console.log(this.submit);
  }

  onSubmit() {
    this.submit = !this.submit;
    console.log(this.submit);
  }
}
