import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log($);
    $('.select2').select2({
      language: 'zh-cn',
      theme: 'bootstrap'
    });
  }

}
