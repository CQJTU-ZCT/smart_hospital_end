import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @Input() name: any;

  constructor(
    private eventService: EventService
  ) {
    this.eventService.subscribe().subscribe(value => {
      this.resize(value);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const chats = $('app-chat');
    console.log(chats);
    let chat;
    for (let i = 0; i < chats.length; i++) {
      const ch = chats[i];
      if (ch.getAttribute('name') === this.name) {
        chat = ch;
        break;
      }
    }
    const width = $(chat).parent().width();
    const height = $(chat).parent().height();
    console.log(width);
    $(chat).children('.chat-container').css({
      width: width,
      height: height
    });
    window.setTimeout(function () {
      const div = document.getElementById('msg-content');
      div.scrollTop = div.scrollHeight;
    }, 1000);

  }

  resize(value) {
    const width = parseFloat(value['width']);
    const height = parseFloat(value['height']) - 31;
    $('.chat-container').css({
      width: width,
      height: height
    });
    const div = document.getElementById('msg-content');
    div.scrollTop = div.scrollHeight;
  }
}
