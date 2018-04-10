import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IgxGridComponent} from 'igniteui-angular/grid/grid.component';


import * as $ from 'jquery';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})


export class GridviewComponent implements OnInit, AfterViewInit {

  @ViewChild('myGrid', {read: IgxGridComponent})
  public grid: IgxGridComponent;

  data: any;

  constructor() {
  }

  ngOnInit() {
    this.data = [
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4},
      {'model': 'Sentra', 'doors': 4, 'mode2l': 'Sentra', 'doo3rs': 4, 'mo1del': 'Sentra', 'doo4rs': 4, 'mosdel': 'Sentra', 'dodors': 4}
    ];
  }

  ngAfterViewInit() {
  }
}
