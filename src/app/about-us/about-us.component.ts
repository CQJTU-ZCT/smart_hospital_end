import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

declare var require: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.get('../assets/imgs/test.md', function (data) {
      const preview = document.getElementById('preview');
      const markdown = require('markdown').markdown;
      preview.innerHTML = markdown.toHTML(data);
    });
  }

}
