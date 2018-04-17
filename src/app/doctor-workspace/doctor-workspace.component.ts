import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-doctor-workspace',
  templateUrl: './doctor-workspace.component.html',
  styleUrls: ['./doctor-workspace.component.css']
})

export class DoctorWorkspaceComponent implements OnInit, AfterViewInit {
  navs: any;
  time: string;

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
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.select2').select2({
      theme: 'bootstrap',
      placeholder: '选择救护车'
    });
    const interact = require('interactjs');
    interact('.container-chat')
      .resizable({
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
      })
      .on('resizemove', event => {
        const target = event.target;
        let x = (parseFloat(target.getAttribute('data-x')) || 0);
        let y = (parseFloat(target.getAttribute('data-y')) || 0);
        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
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
    $('.collapse').collapse('hide');
    if ($('#multiCollapseExample1').collapse('toggle')) {
      $('#multiCollapseExample1').collapse('hide');
    } else {
      $('#multiCollapseExample1').collapse();
    }
  }

  getTime() {
    const format = require('date-fns/format');
    this.time = format(new Date(), 'YYYY年MM月DD日 HH时mm分ss秒');
    $('#time').text(this.time);
  }

  diagnose() {
    $('.collapse').collapse('hide');
    if ($('#diagnose').collapse('toggle')) {
      $('#diagnose').collapse('hide');
    } else {
      $('#diagnose').collapse();
    }
  }
}
