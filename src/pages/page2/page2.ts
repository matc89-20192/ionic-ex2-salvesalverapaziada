
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  nome: string = "";

  nomeAnterior: string = "";

  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = this.navParams.get('nome');

    this.callback = this.navParams.get('callback');

    this.nomeAnterior = this.nome;

  }

  TrocarUsuarioP2() {

    this.callback(this.nome);

    this.navCtrl.pop();
  }

  TrocarUsuarioCancelado() {
    this.navCtrl.pop();
  }
}
