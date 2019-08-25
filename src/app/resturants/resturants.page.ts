import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-resturants",
  templateUrl: "./resturants.page.html",
  styleUrls: ["./resturants.page.scss"]
})
export class ResturantsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onHome() {
    this.router.navigate(["/home"]);
  }
}
