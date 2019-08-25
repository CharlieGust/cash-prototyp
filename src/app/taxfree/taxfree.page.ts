import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalComponent } from "../modal/modal.component";

import { Router } from "@angular/router";
import { TouchSequence } from "selenium-webdriver";

@Component({
  selector: "app-taxfree",
  templateUrl: "./taxfree.page.html",
  styleUrls: ["./taxfree.page.scss"]
})
export class TaxfreePage {
  constructor(
    public modalController: ModalController,
    private router: Router
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        itemName: "Klocka",
        originalPrice: "99€",
        newPrice: "79€"
      }
    });
    return await modal.present();
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        itemName: "Braclet",
        originalPrice: "79€",
        newPrice: "59€"
      }
    });
    return await modal.present();
  }

  onHome() {
    this.router.navigate(["/home"]);
  }
}
