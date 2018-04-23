import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ConfigService} from '../services/config.service';
import * as $ from 'jquery';
import * as Stackedit from 'stackedit-js/docs/lib/stackedit.js';
import * as screenfull from 'screenfull/dist/screenfull.js';
declare var require: any;
require('slick-carousel');

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit, AfterViewInit {

  nav: any;
  listItem: any;
  stackedit: any;
  textarea: any;

  constructor(
    private config: ConfigService
  ) {
    this.nav = this.config.getDefaultNavPills();
    this.listItem = ['宣传资料配置', '基础信息配置'];
    this.stackedit = new Stackedit();
    // Listen to StackEdit events and apply the changes to the textarea.
    this.stackedit.on('fileChange', (file) => {
      this.textarea.value = file.content.text;
      $('.markdown-content').html(file.content.html);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    ($('.carousel-info') as any).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true
    });
    this.textarea = document.querySelector('textarea');
  }

  openFilePicker() {
    $('#filePicker').click();
  }

  mdChange() {
    const markdown = require('markdown').markdown;
    $('.markdown-content').html(markdown.toHTML($('#profileInput').val()));
  }

  markdown() {
    // Open the iframe
    this.stackedit.openFile({
      name: 'Filename', // with an optional filename
      content: {
        text: this.textarea.value // and the Markdown content.
      }
    });
  }

  fullScreenPreview() {
    const target = $('.markdown-preview')[0];
    if (screenfull.enabled) {
      screenfull.toggle(target);
    }
  }

}
