import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from '../services/config.service';
import * as $ from 'jquery';
import * as popper from 'popper.js';
import {MapTypeEnum} from 'angular2-baidu-map';

declare var require: any;
const select2 = require('select2');
require('hammerjs');
@Component({
  selector: 'app-car-manage',
  templateUrl: './car-manage.component.html',
  styleUrls: ['./car-manage.component.css']
})
export class CarManageComponent implements OnInit, AfterViewInit {
  option: any;
  navs: any;
  makerLocation: any;

  constructor(
    private config: ConfigService
  ) {
    this.navs = this.config.getDefaultNavPills();
    this.option = {
      centerAndZoom: {
        lng: 106.592354,
        lat: 29.568996,
        zoom: 15
      },
      enableKeyboard: true,
      mapType: MapTypeEnum.BMAP_NORMAL_MAP,
      enableScrollWheelZoom: true,

    };
    this.makerLocation = [
      {
        point: {
          lng: 106.592354,
          lat: 29.568996
        }
      }
    ];
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    ($('.select2') as any).select2({
      theme: 'bootstrap',
      placeholder: '选择救护车'
    });
    //  init baidu map

  }

  change($event) {
    // const row = $event.target.parent.parent;
    // check
    if ($event.target.classList.contains('act-item-disabled')) {
      console.log('changed');
      return;
    }
    const row = $event.target.parentNode.parentNode;
    for (let index = 0; index < row.children.length; index++) {
      const node = row.children[index];
      if (node.nodeName === 'INPUT') {
        node.removeAttribute('disabled');
      }
    }
    row.children[0].focus();
    $event.target.classList.remove('act-item');
    $event.target.classList.toggle('act-item-disabled');
    $event.target.parentNode.children[2].classList.remove('dismiss');
  }

  submit($event) {
    console.log('copy that');

    const row = $event.target.parentNode.parentNode;
    for (let index = 0; index < row.children.length; index++) {
      const node = row.children[index];
      if (node.nodeName === 'INPUT') {
        node.setAttribute('disabled', 'disabled');
      }
    }
    $event.target.classList.toggle('dismiss');
    $event.target.parentNode.children[0].classList.remove('act-item-disabled');
    $event.target.parentNode.children[0].classList.toggle('act-item');
    // todo send change data to sever
    // show alert
    $('.alert').removeClass('dismiss');
    $('.alert').removeClass('fadeOut');
    window.setTimeout(function () {
      $('.alert').addClass('fadeOut');
      // $('.alert').addClass('dismiss');
      window.setTimeout(function () {
        $('.alert').addClass('dismiss');
      }, 1000);
    }, 2000);
  }

  back() {
    $('#add-car').removeClass('display');
    $('#add-car').addClass('dismiss');
    $('#manage-car').removeClass('display');
    $('#manage-car').addClass('dismiss');
    $('#car-monitor').removeClass('dismiss');
    if (!$('#car-monitor').hasClass('animated')) {
      $('#car-monitor').addClass('display');
      $('#car-monitor').addClass('animated');
      $('#car-monitor').addClass('fadeIn');
    }
  }

  toAddCar() {
    $('#add-car').removeClass('dismiss');
    $('#add-car').addClass('display');
    $('#car-monitor').removeClass('display');
    $('#car-monitor').addClass('dismiss');
  }

  toManageCar() {
    $('#manage-car').removeClass('dismiss');
    $('#manage-car').addClass('display');
    $('#car-monitor').removeClass('display');
    $('#car-monitor').addClass('dismiss');
  }

  onReady(map: any) {

  }
  public showWindow({ e, marker, map }: any): void {
    map.openInfoWindow(
      new window.BMap.InfoWindow('地址：浦东南路360号', {
        offset: new window.BMap.Size(0, -30),
        title: '新上海国际大厦'
      }),
      marker.getPosition()
    );
  }
}
