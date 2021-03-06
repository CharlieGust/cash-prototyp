import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(["/form"]);
  }

  onSubmit() {
    this.router.navigate(["/taxfree"]);
  }

  onSubmit2() {
    this.router.navigate(["/resturants"]);
  }
}
