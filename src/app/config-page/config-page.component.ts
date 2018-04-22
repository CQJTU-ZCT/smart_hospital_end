import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ConfigService} from '../services/config.service';
import * as $ from 'jquery';
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

  constructor(
    private config: ConfigService
  ) {
    this.nav = this.config.getDefaultNavPills();
    this.listItem = ['宣传资料配置', '基础信息配置'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    ($('.carousel-info') as any).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>'
    });
  }


}
