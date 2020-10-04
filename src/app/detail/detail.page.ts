import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: {
    email: string,
    name: string,
    password: string,
    amount: string
  };
  constructor() {
    this.data = history.state;
  }

  ngOnInit() {
  }

}
