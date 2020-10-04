import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data: {
    email: string,
    name: string,
    password: string,
    amount: string
  };

  constructor(public router: Router) {
    this.data = history.state;
  }

  ngOnInit() {
  }

  showDetail() {
    this.router.navigateByUrl('/detail', {
      state: {
        email: this.data.email,
        name: this.data.name,
        password: this.data.password,
        amount: this.data.amount
      }
    });
  }
}
