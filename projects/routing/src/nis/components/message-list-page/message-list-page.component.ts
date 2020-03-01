import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'nis-message-list-page',
  templateUrl: './message-list-page.component.html',
  styleUrls: ['./message-list-page.component.scss']
})
export class MessageListPageComponent implements OnInit {

  title = 'Inbox';
  messages: Array<Message>;

  constructor() {
    this.messages = [
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: 'Angular 1.5',
        body: ' a b c '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: 'Typescript',
        body: ' a b c d e f  '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: 'Flexbox how-to',
        body: ' a b c d e f  '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: 'Re: ES6 tutorial',
        body: ' a b c d e f  '
      }
    ];
  }

  ngOnInit(): void {
  }

  selectCurrentMessage(message: Message) {

  }

}
