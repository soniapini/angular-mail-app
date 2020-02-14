import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';
import {MessageActionEvent} from './models/messageActionEvent';
import {SelectFolderEvent} from './models/selectFolderEvent';

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

    // TODO discuss if initialize the sender here or in the composer
    // this.draft = {
    //   from : AccountService.getAccountEmail()
    // };
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

  compose(template?: Message) {
    // TODO set composerActive flag
  }

  updateDraft(event: MessageActionEvent) {
    this.draft = event.message;
    this.composerActive = true;
  }

  send(event: MessageActionEvent) {
    // TODO close the composer section
    // TODO ADVANCED add to sent messages
  }

  closeComposer() {
    // TODO
  }
}
