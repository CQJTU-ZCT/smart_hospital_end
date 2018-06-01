import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';


import * as $ from 'jquery';
import * as Handsontable from 'handsontable';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})


export class GridviewComponent implements OnInit, AfterViewInit {

  data: any;
  id: number;

  constructor() {
    this.id = 1;
    this.data = [
      {
        '订单编号': 'AD2018060114232099823',
        '类型': '挂号',
        '金额': 45.00,
        '处理人': '李建民',
        '处理时间': '2018-06-01 14:30:23',
        '创建时间': '2018-06-01 14:23:20',
        '支付状态': '已支付',
        '支付方式': '微信支付'
      },
      {
        '订单编号': 'AD2018060114232097824',
        '类型': '取药',
        '金额': 314.56,
        '处理人': '张开发',
        '处理时间': '2018-06-01 14:31:43',
        '创建时间': '2018-06-01 14:23:22',
        '支付状态': '未支付',
        '支付方式': ''
      },
      {
        '订单编号': 'AD2018060114232497821',
        '类型': '住院',
        '金额': 2000.00,
        '处理人': '周生生',
        '处理时间': '2018-06-01 14:30:23',
        '创建时间': '2018-06-01 14:24:20',
        '支付状态': '已支付',
        '支付方式': '微信支付'
      },
      {
        '订单编号': 'AD2018060114232099823',
        '类型': '手术',
        '金额': 9100.20,
        '处理人': '王贤勇',
        '处理时间': '2018-06-01 14:30:23',
        '创建时间': '2018-06-01 14:27:20',
        '支付状态': '已支付',
        '支付方式': '支付宝'
      }
    ];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const table = document.getElementById('table');
    const header = document.createElement('thead');
    let trs = document.createElement('tr');
    for (var key in this.data[0]) {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.innerText = key;
      trs.appendChild(th);
    }
    header.appendChild(trs);
    table.appendChild(header);
    const tbody = document.createElement('tbody');
    for (var d in this.data) {
      const tra = document.createElement('tr');
      for (var key in this.data[d]) {
        const td = document.createElement('td');
        td.innerText = this.data[d][key];
        tra.appendChild(td);
      }
      tbody.appendChild(tra);
    }
    table.appendChild(tbody);
    this.id = 1;
    setInterval(this.add, 3000);
  }

  add() {
    const body = $('#table').children()[1];
    console.log(body);
    const newd = {
      '订单编号': 'AD2018060114232099823',
      '类型': '挂号',
      '金额': 45.00,
      '处理人': '程飘',
      '处理时间': '2018-06-01 14:30:23',
      '创建时间': '2018-06-01 14:23:20',
      '支付状态': '已支付',
      '支付方式': '微信支付'
    };
    this.id += 1;
    const trs = document.createElement('tr');
    for (var key in newd) {
      const td = document.createElement('td');
      td.innerText = newd[key];
      trs.appendChild(td);
    }
    body.insertBefore(trs, body.children[0]);
  }

}
