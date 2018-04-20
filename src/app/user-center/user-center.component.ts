import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../services/config.service';

import * as $ from 'jquery';

declare var require: any;
require('slick-carousel');
require('hammerjs');

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css']
})
export class UserCenterComponent implements OnInit, AfterViewInit {
  type: any;
  nav: any;
  infos: any;

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    private router: Router
  ) {
    this.infos = [
      {
        'label': '电话',
        'value': '18923329983'
      },
      {
        'label': '地址',
        'value': '重庆市南岸区二塘村'
      },
      {
        'label': '生份证号',
         'value': '122123199808118091'
      }
    ];
  }

  ngOnInit() {
    this.type = this.route.params.subscribe(param => {
      this.type = '' + param.type;
      this.init();
    });
  }

  init() {
    if (this.type === '1') {
      console.log('llll');
      this.nav = {
        current: 1,
        pills: [
          {
            name: '工作窗口',
            link: '/main',
          },
          {
            name: '个人中心',
            link: ''
          }
        ],
        type: 1
      };
    } else if (this.type === '0') {
      this.nav = {
        current: 5,
        pills: this.config.getDefaultNavPills(),
        type: 0
      };
    } else {
      this.router.navigate(['/404']);
    }
  }

  ngAfterViewInit() {
    // init for igx-angular ui
    // fix avatar
    $('.igx-avatar__image')[0].remove();
  }

}
