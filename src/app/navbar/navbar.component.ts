import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input()
  current: number;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // init for bootstrap tooltip
    console.log($('[data-toggle="tooltip"]').length);
    $('[data-toggle="tooltip"]').tooltip();
    const navs = $('#navbar').children();
    navs[this.current].classList.toggle('active');

  }

}
