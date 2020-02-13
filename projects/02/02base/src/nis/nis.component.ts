import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';

@Component({
  selector: 'nis-root',
  templateUrl: './nis.component.html',
  styleUrls: ['./nis.component.scss']
})
export class NisComponent implements OnInit {
  messages: Array<Message>;
  currentMessage: Message;
  folders: Array<string>;
  customFolders: Array<string>;
  defaultFolder: string;

  constructor() {
  }

  ngOnInit(): void {
    this.messages = [];

    // TODO load data from services (or backend);
    this.folders = [
      'Inbox',
      'Trash',
      'Sent'
    ];
    this.customFolders = [
      'Angular',
      'Typescript',
    ];
    this.defaultFolder = 'Inbox';
  }

  // TODO load messages list from service
  private loadInbox(): Array<Message> {
    return null;
  }
}
