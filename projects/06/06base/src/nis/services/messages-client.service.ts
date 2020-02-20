import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Message} from '../models/message';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesClientService {

  constructor(private http: HttpClient) {
  }

  getMessages(folderId: number, isCustomFolder: boolean): Observable<Array<Message>> {

    let params: HttpParams;

    if (isCustomFolder) {
      params = new HttpParams().set('customFolder', '' + folderId);
    } else {
      params = new HttpParams().set('folder', '' + folderId);
    }

    // TODO
    return this.http.get<Array<Message>>('http://localhost:3000/messages', {params});
  }

  searchAll(query: string) {
    const params: HttpParams = new HttpParams().set('q', query);

    // TODO ADVANCES inserire la chiamata REST GET per recuperare i messaggi dal server (mocked)
  }

  addMessage(message: Message) {
    // TODO ADVANCES inserire la chiamata REST POST per salvare il messaggio sul server (mocked)
  }

  deleteMessage(message: Message) {
    return this.http.patch<Message>('http://localhost:3000/messages/' + message.id, message);
  }
}
