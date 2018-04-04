import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pawd',
  templateUrl: './reset-pawd.component.html',
  styleUrls: ['./reset-pawd.component.css']
})
export class ResetPawdComponent implements OnInit {
  userId: string;
  captcha: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.userId = this.activatedRoute.params['value'].userId;
    this.captcha = this.activatedRoute.params['value'].captcha;
    console.log(this.userId);
    console.log(this.captcha);
  }

  ngOnInit() {
  }

  submit() {
    this.route.navigate(['login']);
  }

}
