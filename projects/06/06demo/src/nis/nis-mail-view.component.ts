import {Component, OnInit} from '@angular/core';
import {Message} from './models/message';
import {MailMessageService} from './services/mail-message.service';
import {MessageActionEvent} from './models/messageActionEvent';
import {Observable} from 'rxjs';
import {MailAccountService} from './services/mail-account.service';
import {Folder} from './models/folder';

@Component({
  selector: 'nis-mail-view',
  templateUrl: './nis-mail-view.component.html',
  styleUrls: ['./nis-mail-view.component.scss']
})
export class NisMailViewComponent implements OnInit {
  messages: Observable<Array<Message>>;
  currentMessage: Message;
  folders: Observable<Array<Folder>>;
  customFolders: Observable<Array<Folder>>;
  defaultFolderId: number;
  customFolderId: number;
  messageListTitle: string;
  draft: Message;
  composerActive: boolean;

  defaultQuery: string;


  constructor(private mailMessageService: MailMessageService,
              private accountService: MailAccountService) {
  }

  ngOnInit(): void {
    // TODO load data from services (or backend);
    this.folders = this.loadFolders();
    this.defaultFolderId = 1;
    this.customFolderId = 0;

    this.customFolders = this.loadCustomFolders();

    this.messages = this.loadMessages();
    this.clearCurrentMessage();

    this.defaultQuery = 'js';
  }

  // TODO load messages list from service
  private loadMessages(): Observable<Array<Message>> {
    return this.mailMessageService.getMessages();
  }

  // TODO load folder list from service
  private loadFolders(): Observable<Array<Folder>> {
    return this.accountService.getAccountDefaultFolders();
  }

  private clearCurrentMessage() {
    this.currentMessage = null;
  }

  // TODO load custom folder list from service
  private loadCustomFolders(): Observable<Array<Folder>> {
    return this.accountService.getAccountCustomFolders();
  }

  private clearFolderAndMessgeSelection() {
    this.clearCurrentMessage();
    this.defaultFolderId = 0;
    this.customFolderId = 0;
  }

  private setMessageListTitle(title: string) {
    this.messageListTitle = title;
  }

  private updateMessageListView(title: string, defaultFolderId?: number, customFolderId?: number) {
    this.setMessageListTitle(title);
    this.customFolderId = customFolderId ? customFolderId : 0;
    this.defaultFolderId = defaultFolderId ? defaultFolderId : 0;
    this.clearCurrentMessage();
  }

  reloadMessageAfterDelete() {
    let currentFolder;
    if (!!this.defaultFolderId) {
      this.folders.subscribe((folders: Folder[]) => {
        currentFolder = folders[this.defaultFolderId];
        this.loadMessagesForSelectedFolder(currentFolder);
      });
    } else {
      this.customFolders.subscribe((folders: Folder[]) => {
        currentFolder = folders[this.defaultFolderId];
        this.loadMessagesForSelectedFolder(currentFolder);
      });
    }
  }

  loadMessagesForSelectedFolder(event: Folder) {
    this.updateMessageListView(event.description, event.id);

    // TODO load data from services (or backend)
    this.mailMessageService.loadMessagesByFolder(event.id);
  }

  loadMessagesForSelectedCustomFolder(event: Folder) {
    this.updateMessageListView(event.description, 0, event.id);

    // TODO load data from services (or backend)
    this.mailMessageService.loadMessagesByFolder(event.id, true);
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
    // TODO chiamare servizio rest per eliminare il messaggio
    this.mailMessageService.deleteMessage(event.message).subscribe(
      () => {
        console.log('Messaggio spostato nel folder Trash');
        this.currentMessage = null;
        this.reloadMessageAfterDelete();
      },
      () => console.error('Errore durante la cancellazione del messaggio')
    );
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
    // TODO Gestire il mancato invio del messaggio
    // TODO ADVANCED visualizzazione componente ALERT ERRORE INVIO o ROUTING su pagina di ERRORE
    this.mailMessageService.sendMessage(event.message).subscribe(() => {
        console.log('Messaggio inviato con successo');
        this.closeComposer();
      },
      () => console.error('Impossibile inviare il messaggio'));
  }

  closeComposer() {
    this.composerActive = false;
  }

  search(query: string) {
    this.messageListTitle = 'Messages matching ' + query;

    this.mailMessageService.getMessagesBySearch(query);
    this.clearFolderAndMessgeSelection();
  }

  addFolder(folderName: string) {
    this.accountService.addCustomFolder(folderName);
  }
}
