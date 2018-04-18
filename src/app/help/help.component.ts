import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare var require: any;


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.get('../assets/imgs/test1.md', function (data) {
      const markdown = require('markdown').markdown;
      const help = document.getElementById('help');
      help.innerHTML = markdown.toHTML(data);
    });
  }

}
