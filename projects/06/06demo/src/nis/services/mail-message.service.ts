import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {MessagesClientService} from './messages-client.service';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailMessageService {
  private messages$: ReplaySubject<Array<Message>> = new ReplaySubject<Array<Message>>();
  private messages: Observable<Array<Message>> = this.messages$.asObservable();

  private inboxFolderId = 1;
  private trashFolderId = 2;
  private sentFolderId = 3;


  constructor(private client: MessagesClientService) {
    this.client.getMessages(1, false).subscribe(
      (messages: Array<Message>) => this.messages$.next(messages),
      (error) => console.log('Errore durante il recupero dei messaggi dal server')
    );
  }

  getMessages(): Observable<Array<Message>> {
    return this.messages;
  }

  loadMessagesByFolder(folderId: number, isCustomFolder = false): void {
    this.client.getMessages(folderId, isCustomFolder).subscribe(
      (messages: Array<Message>) => this.messages$.next(messages),
      (error) => console.log('Errore durante il recupero dei messaggi dal server')
    );
  }

  getMessagesBySearch(query: string): void {
    // TODO replace this with a call to MessageSearchService.searchMessages(query)
    this.client.searchAll(query).subscribe(
      (messages: Array<Message>) => this.messages$.next(messages),
      (error) => console.log('Errore durante l\'esecione della search sul server')
    );
  }


  deleteMessage(message: Message) {
    // TODO cambiare il folder del messaggio a TRASH
    message['folder'] = this.trashFolderId;
    message['customFolder'] = 0;
    message['inCustomFolder'] = false;

    return this.client.deleteMessage(message);
  }

  sendMessage(message: Message): Observable<Message> {
    // TODO archiviare il messaggio sul server e assegnarli Folder Sent
    message['folder'] = this.sentFolderId;
    message['inCustomFolder'] = false;

    return this.client.addMessage(message);
  }
}
