import {AfterViewInit, Component, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {timer} from 'rxjs/observable/timer';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-car-manage',
  templateUrl: './car-manage.component.html',
  styleUrls: ['./car-manage.component.css']
})
export class CarManageComponent implements OnInit, AfterViewInit {
  baiduMap: any;
  navs: any;

  constructor(
    private config: ConfigService
  ) {
    this.navs = this.config.getDefaultNavPills();
  }




  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.select2').select2({
      theme: 'bootstrap',
      placeholder: '选择救护车'
    });
    //  init baidu map
    this.baiduMap = new BMap.Map('bdmap');
    const point = new BMap.Point(116.404, 39.915);
    this.baiduMap.centerAndZoom(point, 15);
    const marker = new BMap.Marker(point);        // 创建标注
    this.baiduMap.addOverlay(marker);
    const opt = {
      width: 200,
      height: 100,
      title: '<label class="text-primary text-center">救护车实时位置</label>'
    };
    const  infoWindow = new BMap.InfoWindow('位置', opt);
    this.baiduMap.openInfoWindow(infoWindow, point);
  }

  change($event) {
    // const row = $event.target.parent.parent;
    // check
    if ($event.target.classList.contains('act-item-disabled')) {
      console.log('changed')
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
}
