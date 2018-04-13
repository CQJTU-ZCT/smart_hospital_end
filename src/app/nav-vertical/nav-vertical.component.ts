import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  publish($event) {
    if ($event.target.classList.contains('active')) {
      return false;
    }
    const navList = document.getElementById('navList');
    for (var index = 0; index < navList.children.length; index++) {
      var aElement = navList.children[index].children[0];
      if (aElement.classList.contains('active')) {
        aElement.classList.remove('active');
      }
    }
    $event.target.classList.toggle('active');
    this.eventService.publish($event.target.attributes['listid']['value']);
    return false;
  }

}
