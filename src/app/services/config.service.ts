import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() {
  }

  getDefaultNavPills(): any {
    const navPills = [
      {
        name: '监控面板',
        link: '/home'
      },
      {
        name: '医生管理',
        link: '/doctor'
      },
      {
        name: '急救车管理',
        link: '/car'
      },
      {
        name: '收费系统',
        link: '/pay'
      },
      {
        name: ' 个人中心',
        link: '#'
      },
    ];
    return navPills;
  }

}
