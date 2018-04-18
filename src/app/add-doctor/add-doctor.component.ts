import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare var require: any;
import * as select2 from 'select2/dist/js/select2.min.js';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log($);
    ($('.select2') as any).select2({
      language: 'zh-cn',
      theme: 'bootstrap'
    });
  }

}
