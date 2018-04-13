import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-pay-sys',
  templateUrl: './pay-sys.component.html',
  styleUrls: ['./pay-sys.component.css']
})
export class PaySysComponent implements OnInit, AfterViewInit {
  navs: any;

  constructor(
    private config: ConfigService
  ) {
    this.navs = this.config.getDefaultNavPills();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myChart = echarts.init(document.getElementById('cash-chart'));
    const option = {
      color: [
        '#36C',
        '#109618',
        '#909',
        '#0099C6',
        '#D47',
        '#6A0',
        '#B82E2E',
        '#316395',
        '#F90',
        '#949',
        '#2A9',
        '#AA1',
        '#63C',
        '#E67300',
        '#651067',
        '#329262',
        '#5574A6',
        '#DC3912'
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['交易金额', '订单数量']
      },
      animation: true,
      animationDelay: 1000,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['08:30', '08:35', '08:40', '08:45', '08:50', '08:55', '09:00', '09:05',
          '09:10', '09:15', '09:20', '09:25', '09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '交易金额',
          type: 'line',
          stack: '总量',
          data: [9, 15, 25, 17, 40, 46, 64, 53, 49, 50, 54, 60, 43, 70, 76, 67, 40, 44, 33],
          label: {
            show: true
          }
        },
        {
          name: '订单数量',
          type: 'line',
          stack: '总量',
          data: [0, 18, 41, 44, 46, 35, 26, 40, 32, 29, 13, 15, 0, 13, 31, 18, 9, 20, 10],
          label: {
            show: true
          }
        },

      ]
    };
    myChart.setOption(option);
  }

}
