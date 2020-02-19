import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';

@Component({
  selector: 'nis-mail-view',
  templateUrl: './nis-mail-view.component.html',
  styleUrls: ['./nis-mail-view.component.scss']
})
export class NisMailViewComponent implements OnInit {
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
