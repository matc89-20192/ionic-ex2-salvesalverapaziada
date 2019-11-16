import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  nome: string = 'Fulano';
  complemento: string = ', ';

  constructor(public navCtrl: NavController) {

  }

  changeUser() {
    this.navCtrl.push(Page2, { nome: this.nome, 'callback': this.receveidData.bind(this) });
  }

  receveidData(att: string) {

    if (att == "") {
      this.complemento = "!";
    } else {
      this.complemento = ", ";
    }
    this.nome = att;
  }

}
