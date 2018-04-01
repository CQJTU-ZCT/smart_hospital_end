import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.css']
})
export class ChatDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = echarts.init(document.getElementById('chart'));
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}人 ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        x: 'center',
        data: ['已预约就诊人员', '已处理预约']
      },
      series: [
        {
          name: '就诊人员流量分析',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '25',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value: 26, name: '已预约就诊人员'},
            {value: 10, name: '已处理预约'}
          ]
        }
      ]
    };
    chart.setOption(option);
  }

}
