import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {DoctorService} from '../services/doctor.service';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-doctor-manage',
  templateUrl: './doctor-manage.component.html',
  styleUrls: ['./doctor-manage.component.css']
})
export class DoctorManageComponent implements OnInit, AfterViewInit {

  msg: any;
  subscription: Subscription;
  navListVerticalItemClickListener: Subscription;

  checkDoctorView: any;
  addDoctorView: any;
  navs: any;
  listItem: any;


  constructor(
    private doctorService: DoctorService,
    private eventService: EventService,
    private router: Router,
    private config: ConfigService
  ) {
    this.subscription = this.doctorService.getMessage().subscribe(msg => {
      this.msg = msg;
      console.log(msg);
    });
    // add nav list item click listener
    this.navListVerticalItemClickListener = this.eventService.subscribe().subscribe(value => {
      console.log(value);
      this.listItemClickListener(value);
    });
    this.navs = this.config.getDefaultNavPills();

    this.listItem = ['管理医生', '添加医生'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.checkDoctorView = document.getElementById('checkDoctor');
    this.addDoctorView = document.getElementById('addDoctor');
  }

  listItemClickListener(itemId: string) {
    switch (itemId) {
      case '0': {
        if (this.addDoctorView.classList.contains('display')) {
          this.addDoctorView.classList.remove('display');
        }
        if (!this.addDoctorView.classList.contains('dismiss')) {
          this.addDoctorView.classList.toggle('dismiss');
        }
        if (this.checkDoctorView.classList.contains('dismiss')) {
          this.checkDoctorView.classList.remove('dismiss');
        }
        if (!this.checkDoctorView.classList.contains('display')) {
          this.checkDoctorView.classList.toggle('display');
        }
        break;
      }
      case '1': {
        if (this.checkDoctorView.classList.contains('display')) {
          this.checkDoctorView.classList.remove('display');
        }
        if (!this.checkDoctorView.classList.contains('dismiss')) {
          this.checkDoctorView.classList.toggle('dismiss');
        }
        if (this.addDoctorView.classList.contains('dismiss')) {
          this.addDoctorView.classList.remove('dismiss');
        }
        if (!this.addDoctorView.classList.contains('display')) {
          this.addDoctorView.classList.toggle('display');
        }
        break;
      }
      default: {
        console.log('err');
        break;
      }
    }
    ;
  }

}
