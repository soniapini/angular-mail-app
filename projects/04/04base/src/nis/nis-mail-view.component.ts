import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';
import {MessageChangedEvent} from './models/messageChangedEvent';
import {SelectFolderEvent} from './models/selectFolderEvent';

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

  selectFolder(event: SelectFolderEvent) {
    this.messageListTitle = event.folderName;

    if ('Inbox' === event.folderName) {
      this.messages = this.loadInbox();
      return;
    }
    // TODO load data from services (or backend)

    this.messages = this.mailMessageService.getMessagesByFolder(event.folderName);
  }

  selectCurrentMessage(event: MessageChangedEvent) {
    this.currentMessage = event.message;
  }

  compose(template: Message) {
    this.draft = template;
    this.composerActive = true;
  }

  delete(message: Message) {

    // TODO delete message

  }

  replyTo(message) {
    // TODO ReplyTo
    // TODO optional lab: delegate reply to MessageReplyService

  }

  forward(message: Message) {
    // TODO optional lab:

  }
}
