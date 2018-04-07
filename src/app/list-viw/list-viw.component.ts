import { Component, OnInit } from "@angular/core";
import { DoctorService } from "../doctor.service";

@Component({
  selector: 'app-list-viw',
  templateUrl: './list-viw.component.html',
  styleUrls: ['./list-viw.component.css']
})
export class ListViwComponent implements OnInit {

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
  }

  test() {
    const msg = {
      id: 2,
      name: 'chengpiao',
      age: 23,
      hospital: 'xinqiao hospital'
    };
    this.doctorService.sendMessae(msg);
  }

  handle($event) {
    if ($event.target.classList.contains('active')) {
      return;
    } else {
      const list = document.getElementById('doctor-list');
      for (var i = 0; i < list.children.length; i++) {
        const button = list.children[i];
        if (button.classList.contains('active')) {
          button.classList.remove('active');
          break;
        }
      }
      $event.target.classList.toggle('active');
    }
  }

}
