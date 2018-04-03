import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.css']
})
export class ChatDoctorComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() legend: any;
  @Input() data: string;
  @Input() chartId: string;
  constructor() { }

  ngOnInit() {
    console.log('chart component initialized');

  }

  ngAfterViewInit() {
    const chart = echarts.init(document.getElementById(this.chartId));
    const option = {
      color: [
        '#109618',
        '#2A9',
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
      animation: true,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}人 ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        x: 'center',
        data: JSON.parse(this.legend),
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: this.title,
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          animationDelay: 500,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: JSON.parse(this.data)
        }
      ]
    };
    chart.setOption(option);
  }

}
