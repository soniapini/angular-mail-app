import {Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, SimpleChanges} from '@angular/core';
import {Folder} from '../../models/folder';
import {Logger} from '../../services/logger.service';


@Component({
  selector: 'nis-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit, OnChanges {
  /**
   * titolo visualizzato prima dell'elenco dei folder
   */
  @Input() title: string;

  /**
   * elenco dei folder visualizzati dal componente
   */
  @Input() folders: Array<Folder>;

  /**
   * folder selezionato
   */
  @Input() defaultFolder: number;

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

  @Output() selectedFolder: EventEmitter<Folder> = new EventEmitter<Folder>();

  @Output() addFolder: EventEmitter<string> = new EventEmitter<string>();

  currentFolder: number;

  newFolderName: string;

  constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
      this.logger.log('some_message');
    }
  }

  ngOnInit(): void {
    if (!this.title) {
      this.title = 'Folder list';
    }

    if (this.defaultFolder !== null && this.defaultFolder !== undefined) {
      this.currentFolder = this.defaultFolder;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.defaultFolder) {
      this.currentFolder = this.defaultFolder;
    }
  }

  private static coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  onAddFolder() {
    // TODO emit event to parent
    this.addFolder.emit(this.newFolderName);
  }

  selectFolder(folder: Folder, index: number) {
    this.currentFolder = index;
    this.selectedFolder.emit(folder);
  }
}
