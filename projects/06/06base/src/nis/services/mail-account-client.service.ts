import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Folder} from '../models/folder';
import {HttpClient} from '@angular/common/http';

/**
 * Client-service per chiamare i servizi REST per Folder Account Info , ecc
 */
@Injectable({
  providedIn: 'root'
})
export class MailAccountClientService {
  foldersUrl: string;

  constructor(private http: HttpClient) {
    this.foldersUrl = 'http://localhost:3000/folders';
  }

  getFolders(): Observable<Array<Folder>> {
    // TODO eseguire chiamta GET
  }

  getCustomFolders(): Observable<Array<Folder>> {
    return this.http.get<Array<Folder>>('http://localhost:3000/customFolders');
  }

  addCustomFolder(folderName: string) {
    return this.http.post<Folder>('http://localhost:3000/customFolders', {description: folderName});
  }

}
