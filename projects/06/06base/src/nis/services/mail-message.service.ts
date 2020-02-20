import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {MessagesClientService} from './messages-client.service';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailMessageService {
  private messages$: ReplaySubject<Array<Message>> = new ReplaySubject<Array<Message>>();
  private messages: Array<Message>;

  constructor(private client: MessagesClientService) {
    // TODO richiamare il servizio
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


  getMessages(): Array<Message> {
    return this.messages;
  }

  getMessagesByFolder(folderName: string): Array<Message> {
    const messages = [
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 1',
        body: ' a b c '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 2',
        body: ' a b c d e f  '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 3',
        body: ' a b c '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 4',
        body: ' a b c d e f  '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: folderName + ' 5',
        body: ' a b c '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: folderName + ' 6',
        body: ' a b c d e f  '
      },

    ];
    return messages;
  }

  getMessagesBySearch(query: string): Array<Message> {
    // TODO replace this with a call to MessageSearchService.searchMessages(query)
    const messages = [
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: query + ' 1',
        body: ' a b c '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'carlo.bonamico@nispro.it',
        subject: query + ' 2',
        body: ' a b c d e f  '
      },
      {
        to: 'carlo.bonamico@gmail.com',
        from: 'sonia.pini@nispro.it',
        subject: query + ' 3',
        body: ' a b c d e f  '
      },

    ];
    return messages;
  }


  deleteMessage(message: Message) {
    // TODO cambiare il folder del messaggio a TRASH
  }

  sendMessage(message: Message): any {
    // TODO archiviare il messaggio sul server e assegnarli Folder Sent
  }
}
