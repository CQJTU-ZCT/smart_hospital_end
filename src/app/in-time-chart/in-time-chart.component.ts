import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-in-time-chart',
  templateUrl: './in-time-chart.component.html',
  styleUrls: ['./in-time-chart.component.css']
})
export class InTimeChartComponent implements OnInit, AfterViewInit {
  category: any;
  appointed: any;
  handled: any;
  freeDoctor: any;
  gap: any;

  constructor() {
    this.category = ['08:30', '08:35', '08:40', '08:45', '08:50', '08:55', '09:00', '09:05',
      '09:10', '09:15', '09:20', '09:25', '09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00'];
    this.appointed = [9, 15, 25, 17, 40, 46, 64, 53, 49, 50, 54, 60, 43, 70, 76, 67, 40, 44, 33];
    this.handled = [0, 2, 4, 20, 24, 30, 34, 23, 25, 26, 27, 30, 34, 37, 34, 27, 25, 20, 33];
    this.freeDoctor = [0, 20, 45, 64, 70, 65, 60, 63, 57, 55, 40, 45, 34, 50, 65, 45, 34, 40, 43];
    this.gap = [0, 18, 41, 44, 46, 35, 26, 40, 32, 29, 13, 15, 0, 13, 31, 18, 9, 20, 10];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const chart = echarts.init(document.getElementById('in-time-chart'));
    const option = {
      title: {
        text: '服务情况实时监控',
        textStyle: {
          color: '#fff'
        },
        x: 'center'
      },
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
      animation: true,
      animationDelay: 500,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      legend: {
        top: 30,
        data: ['已预约人数', '已处理人数', '空闲医生人数', '空闲医生-待处理就诊差额'],
        textStyle: {
          color: '#fff'
        }

      },
      xAxis: [
        {
          boundaryGap: true,
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: '#FFF'
            }
          },
          data: this.category
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '人次',
          nameTextStyle: {
            color: '#FFF'
          },
          min: 0,
          position: 'left',
          axisLabel: {
            formatter: '{value} 人',
            textStyle: {
              color: '#FFF'
            }
          },
          splitLine: {
            show: false
          },
        },
      ],
      dataZoom: [
        {
          show: true,
          start: 0,
          end: 100,
          type: 'inside'
        },
        {
          dataBackground: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#909' // 0% 处的颜色
                }, {
                  offset: 1, color: '#FFF' // 100% 处的颜色
                }],
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#909' // 0% 处的颜色
                }, {
                  offset: 1, color: '#FFF' // 100% 处的颜色
                }],
              }
            }
          },
          textStyle: {
            color: '#FFF'
          }
        }
      ],
      series: [
        {
          name: '空闲医生-待处理就诊差额',
          type: 'line',
          smooth: true,
          data: this.gap,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 10,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#36C'
              }, {
                offset: 1,
                color: '#FFF'
              }])
            }
          },
        },
        {
          name: '已预约人数',
          type: 'bar',
          data: this.appointed,
          label: {
            normal: {
              show: true
            }
          },
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
            }
          },
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '已处理人数',
          type: 'bar',
          data: this.handled,
          label: {
            normal: {
              show: true
            }
          },
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
            }
          },
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '空闲医生人数',
          type: 'bar',
          data: this.freeDoctor,
          label: {
            normal: {
              show: true
            }
          },
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
            }
          },
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }
      ]
    };
    chart.setOption(option);
  }

}
