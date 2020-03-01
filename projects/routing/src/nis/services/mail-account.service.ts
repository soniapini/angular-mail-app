import {Injectable} from '@angular/core';
import {MailAccountClientService} from './mail-account-client.service';
import {Observable, ReplaySubject} from 'rxjs';
import {Folder} from '../models/folder';
import {publish, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailAccountService {
  private customFolders$: ReplaySubject<Array<Folder>> = new ReplaySubject<Array<Folder>>();
  private customFolders: Observable<Array<Folder>> = this.customFolders$.asObservable();

  constructor(private client: MailAccountClientService) {
  }

  getAccountDefaultFolders(): Observable<Array<Folder>> {
    return this.client.getFolders();
  }

  getAccountCustomFolders(): Observable<Array<Folder>> {
    return this.client.getCustomFolders();
  }

  addCustomFolder(folderName: string) {
    let addCustomFolder;
    addCustomFolder = this.client.addCustomFolder(folderName).pipe(take(1));

    let readCustomFolders;
    readCustomFolders = this.getAccountCustomFolders().pipe(take(1), publish());

    readCustomFolders.subscribe((folders: Array<Folder>) => this.customFolders$.next(folders));

    addCustomFolder.subscribe(() => {
    }, null, readCustomFolders.connect.bind(readCustomFolders));
  }
}
