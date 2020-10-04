import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  name: string;
  password: string;
  amount: string;
  emailInput: string;
  passwordInput: string;

  constructor(public navCtrl: NavController, public toastController: ToastController, public router: Router) {
    this.email = 'quoctrung163@gmail.com';
    this.name = 'quoctrung';
    this.password = '1234';
    this.amount = '10000';
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Login done!',
      duration: 2000
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Login failed!',
      duration: 2000
    });
    toast.present();
  }

  onLogin() {
    if (this.email === this.emailInput) {
      // this.navCtrl.navigateForward('dashboard');
      this.router.navigateByUrl('/dashboard', {
        state: {
          email: this.email,
          name: this.name,
          password: this.password,
          amount: this.amount
        }
      });
      this.successToast();
    } else {
      this.errorToast();
    }
  }
}
