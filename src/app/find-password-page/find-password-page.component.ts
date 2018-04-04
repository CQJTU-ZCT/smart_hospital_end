import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-password-page',
  templateUrl: './find-password-page.component.html',
  styleUrls: ['./find-password-page.component.css']
})
export class FindPasswordPageComponent implements OnInit {

  username: string;
  nameValid: boolean;
  validStr: string;
  constructor(
    private router: Router
  ) {
    this.username = '程飘';
    this.nameValid = true;
  }

  ngOnInit() {
  }

  submit() {
    if (this.username === '') {
      this.nameValid = false;
      this.validStr = '用户名不能为空';
    } else {
      this.nameValid = true;
      this.router.navigate(['tip']);
    }
    console.log(this.username);
  }

}
