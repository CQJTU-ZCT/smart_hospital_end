import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';
import {EmojiService} from '../services/emoji.service';

import * as $ from 'jquery';
declare var require: any;
require('slick-carousel');

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit, AfterViewInit {

  @Input() row: number;

  @Input() col: number;

  pages: number;
  emojis: any;
  emojisNums: number;

  constructor(
    private event: EventService,
    private emoji: EmojiService
  ) {
    this.emojis = this.emoji.getEmoji();
    this.emojisNums = this.emojis.length;
  }

  ngAfterViewInit() {
    this.pages = this.emojisNums % (this.row * this.col) === 0
      ? this.emojisNums / (this.row * this.col)
      : this.emojisNums / (this.row * this.col) + 1;
    const page = $('#emoji');
    let index = 0;
    for (let i = 0; i < this.pages - 1; i++) {
      let div;
      div = $('<div></div>');
      const table = $('<table class="table table-bordered">' +
                    '</table>');
      const tbody = $('<tbody></tbody>');
      for (let j = 0; j < this.row; j++) {
        const tr = $('<tr></tr>');
        for (let k = 0; k < this.col; k++) {
          if (index < this.emojisNums) {
            const td = $('<td _ngcontent-c1 class="emoji-item">' + this.emojis[index] + '</td>');
            index++;
            //  add click handler
            td.click(this.emojiClickHandler());
            tr.append(td);
          } else {
            break;
          }
        }
        tbody.append(tr);
      }
      table.append(tbody);
      div.append(table);
      page.append(div);
    }
    (page as any).slick({
      arrows: true,
    });
  }

  ngOnInit() {
  }


  emojiClickHandler() {
    const that = this;
    return function () {
      that.event.publish({
        type: 'emoji',
        content: $(this).text()
      });
    };
  }

}
