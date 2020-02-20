import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';

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
  messageListTitle: string;

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

  selectFolder(folderName) {
    this.messageListTitle = folderName;

    if ('Inbox' === folderName) {
      this.messages = this.loadInbox();
      return;
    }
    // TODO load data from services (or backend)

    this.messages = this.mailMessageService.getMessagesByFolder(folderName);
  }
}
