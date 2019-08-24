import { Component, OnInit } from '@angular/core';
import { ModalController,  NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit{
  modalName: string;
  modalOriginal: string;
  modalNew: string;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalName = this.navParams.data.itemName;
    this.modalOriginal = this.navParams.data.originalPrice;
    this.modalNew = this.navParams.data.newPrice;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped up";
    await this.modalController.dismiss(onClosedData);
  }

}
