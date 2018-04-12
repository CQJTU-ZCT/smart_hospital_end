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
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      },
      {
        'model': 'Sentra231455334661123',
        'doors': 4,
        'mode2l': 'Sentraaxs2314asaw',
        'doo3rs': 4,
        'mo1del': 'Sentra',
        'doo4rs': 4,
        'mosdel': 'Sentra',
        'dodors': 4
      }
    ];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const table = document.getElementById('table');
    const header = document.createElement('thead');
    let tr = document.createElement('tr');
    for (var key in this.data[0]) {
      var th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.innerText = key;
      tr.appendChild(th);
    }
    header.appendChild(tr);
    table.appendChild(header);
    const tbody = document.createElement('tbody');
    for (var d in this.data) {
      var tr = document.createElement('tr');
      for (var key in this.data[d]) {
        var td = document.createElement('td');
        td.innerText = this.data[d][key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    this.id = 1;
    setInterval(this.add, 3000);
  }

  add() {
    const body = $('#table').children()[1];
    console.log(body);
    const newd = {
      'model': 'Sentra231455334661123',
      'doors': this.id,
      'mode2l': 'Sentraaxs2314asaw',
      'doo3rs': 4,
      'mo1del': 'Sentra',
      'doo4rs': 4,
      'mosdel': 'Sentra',
      'dodors': 4
    };
    this.id += 1;
    let tr = document.createElement('tr');
    for (let key in newd) {
      var td = document.createElement('td');
      td.innerText = newd[key];
      tr.appendChild(td);
    }
    body.insertBefore(tr, body.children[0]);
  }

  }
