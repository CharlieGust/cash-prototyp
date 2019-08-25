import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"]
})
export class FormPage implements OnInit {
  validations_form: FormGroup;

  constructor(public formBuilder: FormBuilder, private router: Router) {}

  navigate() {
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      name: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      )
    });
  }
  validation_messages = {
    name: [{ type: "required", message: "Name is required." }],
    lastname: [{ type: "required", message: "Last name is required." }],
    email: [
      { type: "required", message: "Email is required." },
      { type: "pattern", message: "Please wnter a valid email." }
    ]
  };
}
