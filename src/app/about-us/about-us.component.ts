import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

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
      const markdown = require('markdown').markdown;
      const preview = document.getElementById('preview');
      preview.innerHTML = markdown.toHTML(data);
    });
  }

}
