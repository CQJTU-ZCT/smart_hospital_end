import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import * as $ from 'jquery';
import * as format from 'date-fns/format';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @Input() name: any;

  msg: string;

  emojiShow: boolean;

  chatRecord: any;

  constructor(
    private eventService: EventService
  ) {
    this.eventService.subscribe().subscribe(value => {
      if (value['type'] === 'emoji') {
        this.emojiHandler(value['content']);
      } else if (value['type'] === 'resize') {
        this.resize(value);
      }
    });
    this.msg = 'sdsd';
    this.emojiShow = false;
    this.chatRecord = [
      {
        type: 0,
        profile: 'https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg',
        content: '你好',
        time: '2014/09/11 12:02:23'
      },
      {
        type: 1,
        profile: 'https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg',
        content: '你好',
        time: '2014/09/11 12:02:23'
      }
      , {
        type: 0,
        profile: 'https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg',
        content: '你说',
        time: '2014/09/11 12:02:23'
      }
    ];
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

  //  emoji handler
  emojiHandler(content: string) {
    this.msg += content;
  }

  emojiCtrl() {
    $('.emoji-container').slideToggle('slow', () => {
    });
    this.emojiShow = !this.emojiShow;
  }

  sendMsg() {
    if (this.msg === '') {
      return;
    }
    let newMsg = {
      type: 0,
      time: format(new Date(), 'YYYY年MM月DD日 HH时mm分SS秒'),
      content: this.msg,
      profile: 'https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg'
    };
    this.chatRecord.push(newMsg);
    newMsg = {
      type: 1,
      time: format(new Date(), 'YYYY年MM月DD日 HH时mm分SS秒'),
      content: this.msg,
      profile: 'https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-in-action.jpg'
    };
    this.chatRecord.push(newMsg);
    this.msg = '';
    window.setTimeout(() => {
      const div = document.getElementById('msg-content');
      div.scrollTop = div.scrollHeight;
    }, 500);
  }
}
