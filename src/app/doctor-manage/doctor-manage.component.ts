import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {DoctorService} from "../doctor.service";

@Component({
  selector: 'app-doctor-manage',
  templateUrl: './doctor-manage.component.html',
  styleUrls: ['./doctor-manage.component.css']
})
export class DoctorManageComponent implements OnInit {

  msg: any;
  subscription: Subscription;
  constructor(
    private doctorService: DoctorService
  ) {
    this.subscription = this.doctorService.getMessage().subscribe(msg => {
      this.msg = msg;
      console.log(msg);
    });
  }

  ngOnInit() {
  }

}
