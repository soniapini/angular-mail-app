import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';

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

  constructor(private mailMessageService: MailMessageService) {
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

    this.messages = this.loadInbox();
    this.currentMessage = this.messages[0];
  }

  // TODO load messages list from service
  private loadInbox(): Array<Message> {
    return this.mailMessageService.getMessages();
  }
}
