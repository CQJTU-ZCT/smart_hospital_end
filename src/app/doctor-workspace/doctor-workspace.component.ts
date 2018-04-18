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
    ($('.collapse') as any).collapse('hide');
    if (($('#multiCollapseExample1') as any).collapse('toggle')) {
      ($('#multiCollapseExample1') as any).collapse('hide');
    } else {
      ($('#multiCollapseExample1') as any).collapse();
    }
  }

  getTime() {
    this.time = format(new Date(), 'YYYY年MM月DD日 HH时mm分ss秒');
    $('#time').text(this.time);
  }

  diagnose() {
    ($('.collapse') as any).collapse('hide');
    if (($('#diagnose') as any).collapse('toggle')) {
      ($('#diagnose') as any).collapse('hide');
    } else {
      ($('#diagnose') as any).collapse();
    }
  }
  showChat() {
    $('.container-chat').slideToggle('slow', () => {
    });
  }
}
