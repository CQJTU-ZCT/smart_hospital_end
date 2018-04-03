import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  legend1: any;
  legend2: any;
  legend1Str: string;
  legend2Str: string;
  data1: any;
  data2: any;
  data1Str: string;
  data2Str: string;

  constructor() {
  }

  ngOnInit() {
    this.legend1 = ['在服务', '空闲'];
    this.legend2 = ['在服务', '可用'];
    this.legend1Str = JSON.stringify(this.legend1);
    this.legend2Str = JSON.stringify(this.legend2);
    this.data1 = [
      {value: 126, name: '空闲'},
      {value: 63, name: '在服务'}
    ];
    this.data2 = [
      {value: 12, name: '可用'},
      {value: 11, name: '在服务'}
    ];
    this.data1Str = JSON.stringify(this.data1);
    this.data2Str = JSON.stringify(this.data2);
  }

}
