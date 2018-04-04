import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-tip',
  templateUrl: './email-tip.component.html',
  styleUrls: ['./email-tip.component.css']
})
export class EmailTipComponent implements OnInit {
  emailAddress: string;

  constructor(
    private router: Router
  ) {
    this.emailAddress = 'https://mail.qq.com';
  }

  ngOnInit() {
  }

  openMail() {
    window.open(this.emailAddress);
  }

}
