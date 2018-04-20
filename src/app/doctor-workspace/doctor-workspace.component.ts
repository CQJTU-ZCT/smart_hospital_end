import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {EventService} from '../services/event.service';
import * as interact from 'interactjs';
import * as format from 'date-fns/format';

@Component({
  selector: 'app-doctor-workspace',
  templateUrl: './doctor-workspace.component.html',
  styleUrls: ['./doctor-workspace.component.css']
})

export class DoctorWorkspaceComponent implements OnInit, AfterViewInit {
  navs: any;
  time: string;
  appointData: any;

  constructor(
    private eventService: EventService
  ) {
    this.navs = [
      {
        name: '工作窗口',
        link: '/main',
      },
      {
        name: '个人中心',
        link: '#'
      }
    ];
    window.setInterval(this.getTime, 1000);

    this.appointData = {
      head: ['姓名', '日期', '时间', '类型', '状态', '操作'],
      data: [
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 1,
          id: 11321
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 13111
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 1,
          id: 1231
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 230012
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 301241
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 230012
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 99012
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 21002
        },
        {
          name: '程飘',
          date: '2018-04-20',
          time: '14:00-14:30',
          type: '预约就诊',
          status: '未处理',
          action: 0,
          id: 789123
        }
      ]
    };
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    ($('.select2') as any).select2({
      theme: 'bootstrap',
      placeholder: '选择救护车'
    });
    const opt = {
      edges: {
        left: true,
        top: true
      },
      restrictEdges: {
        outer: 'parent',
        endOnly: true,
      },
      restrictSize: {
        min: {width: 470, height: 260},
      },
      inertia: true
    };
    interact('.container-chat')
      .resizable(opt)
      .on('resizemove', (event: any) => {
        const target = event.target;
        let x = (parseFloat(target.getAttribute('data-x')) || 0);
        let y = (parseFloat(target.getAttribute('data-y')) || 0);
        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
        // emit a resize event
        this.eventService.publish({
          type: 'resize',
          width: target.style.width,
          height: target.style.height
        });
        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      });

  }

  show() {
    $('#appointed-table').slideToggle('slow', () => {
    });
  }

  getTime() {
    this.time = format(new Date(), 'YYYY年MM月DD日 HH时mm分ss秒');
    $('#time').text(this.time);
  }

  diagnose() {
    $('#diagnose').slideToggle('slow', () => {
    });
  }
  showChat() {
    $('.container-chat').slideToggle('slow', () => {
    });
  }

  commitBtn($event) {
    console.log($event.target.parentNode.getAttribute('id'));
  }
}
