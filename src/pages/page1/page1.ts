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
  texto: string = 'Oi, ';
  constructor(public navCtrl: NavController) {
  }
  TrocarUsuarioP1() {
    this.navCtrl.push(Page2, { nome: this.nome, 'callback': this.receveidData.bind(this) });
  }
  receveidData(atualizado: string) {
    if (atualizado == "") {
      this.texto = "Oi! ";
    } else {
      this.texto = "Oi, ";
    }
    this.nome = atualizado;
  }
}
