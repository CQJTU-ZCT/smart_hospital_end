import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';
import * as popper from 'popper.js';
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

  constructor() {
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

}
