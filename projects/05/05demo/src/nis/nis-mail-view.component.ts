import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';
import {MessageActionEvent} from './models/messageActionEvent';
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
  draft: Message;
  composerActive: boolean;


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

  selectCurrentMessage(event: MessageActionEvent) {
    this.currentMessage = event.message;
  }

  compose(template?: Message) {
    if (template) {
      this.draft = template;
    }
    this.composerActive = true;
  }

  delete(event: MessageActionEvent) {
    const index = this.messages.indexOf(event.message);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

  replyTo(event: MessageActionEvent) {
    // TODO optional lab: delegate reply to MessageReplyService
    const message = event.message;
    const template: Message = {
      to: message.from,
      from: 'carlo.bonamico@nispro.it',
      subject: 'Re: ' + message.subject,
      body: '>' + message.body
    };
    this.compose(template);
  }

  forward(message: MessageActionEvent) {
    // TODO optional lab:

  }

  updateDraft(event: MessageActionEvent) {
    this.draft = event.message;
    this.composerActive = true;
  }

  send(event: MessageActionEvent) {
    this.closeComposer();
  }

  closeComposer() {
    this.composerActive = false;
  }
}
