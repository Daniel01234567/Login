import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { Storage } from '@ionic/storage';
import { EntrarPage } from '../entrar/entrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuarios = [];
  usuario = "";
  registrar = UsuarioPage;
  entrar = EntrarPage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(key => key == 'usuario')) {
          this.storage.get('usuario')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }

      });
  }


  clickRegistrar() {
    this.navCtrl.push(this.registrar, { usuarios: this.usuarios });

  }

  clickEntrar() {
    this.navCtrl.push(this.entrar, { usuarios: this.usuarios });

  }
}