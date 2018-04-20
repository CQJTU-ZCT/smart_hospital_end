import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import * as popper from 'popper.js';
import {Router, RouterModule} from '@angular/router';
declare var require: any;

require('bootstrap');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input()
  current: number;

  @Input()
  navPills: any;

  @Input()
  id: any;

  @Input()
  type: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // init for bootstrap tooltip
    ($('[data-toggle="tooltip"]') as any).tooltip();
    console.log(this.current);
    const navs = document.getElementById(this.id).children;
    console.log(navs[this.current]);
    navs[this.current].classList.toggle('active');

  }

  navigate($event) {
    const s = $event.target.innerText;
    if (s === '个人中心') {
      this.router.navigate(['/user', this.type]);
      return false;
    }
  }

}
