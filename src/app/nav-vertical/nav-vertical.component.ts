import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  @Input()
  items: any;

  @Input()
  id: string;
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
  }

  publish($event) {
    if ($event.target.classList.contains('active')) {
      return false;
    }
    console.log(this.id);
    const navList = document.getElementById(this.id);
    for (let index = 0; index < navList.children.length; index++) {
      const aElement = navList.children[index].children[0];
      if (aElement.classList.contains('active')) {
        aElement.classList.remove('active');
      }
    }
    $event.target.classList.toggle('active');
    this.eventService.publish($event.target.attributes['target']['value']);
    return false;
  }

}
