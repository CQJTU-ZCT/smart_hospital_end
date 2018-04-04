import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('view init');

  }

}
