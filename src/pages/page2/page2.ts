
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  nome: string = "";

  nomePrevious: string = "";

  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.nome = this.navParams.get('nome');

    this.callback = this.navParams.get('callback');

    this.nomePrevious = this.nome;

  }

  changeUser() {

    this.callback(this.nome);

    this.navCtrl.pop();
  }

  changeUserCancel() {
    this.navCtrl.pop();
  }
}
