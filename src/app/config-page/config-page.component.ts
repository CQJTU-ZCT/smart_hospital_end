import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

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

}
