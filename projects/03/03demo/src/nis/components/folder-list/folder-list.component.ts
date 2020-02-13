import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectFolderEvent} from '../../models/selectFolderEvent';


@Component({
  selector: 'nis-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  /**
   * titolo visualizzato prima dell'elenco dei folder
   */
  @Input() title: string;

  /**
   * elenco dei folder visualizzati dal componente
   */
  @Input() folders: Array<string>;

  /**
   * folder selezionato
   */
  @Input() defaultFolder: string;

  // tslint:disable-next-line:variable-name
  private _allowCreate: boolean;
  /**
   * permette di avere due tipo di layout
   */
  @Input() set allowCreate(value: boolean) {
    this._allowCreate = FolderListComponent.coerceBooleanProperty(value);
  }

  get allowCreate(): boolean {
    return this._allowCreate;
  }

  @Output() selectedFolder: EventEmitter<SelectFolderEvent> = new EventEmitter<SelectFolderEvent>();

  currentFolder: string;

  newFolderName: string;

  constructor() {
  }

  private static coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  ngOnInit(): void {
    if (!this.title) {
      this.title = 'Folder list';
    }

    if (this.defaultFolder) {
      this.selectFolder(this.defaultFolder);
    }
  }

  addFolder() {
    // TODO discuss if it is better here or in the parent

    // TODO migliorare controlli su inserimento
    // abilitazione pulsante
    this.folders.push(this.newFolderName);
    this.newFolderName = '';
    // TODO ADVANCED notify parent
  }

  selectFolder(folder) {
    this.currentFolder = folder;
    const event: SelectFolderEvent = {
      folderName: folder
    };
    this.selectedFolder.emit(event);
  }
}
