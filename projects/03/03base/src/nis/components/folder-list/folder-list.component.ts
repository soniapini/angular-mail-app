import {Component, OnInit} from '@angular/core';
import {SelectFolderEvent} from '../../models/selectFolderEvent';


@Component({
  selector: 'nis-folder-list',
  TODO completare i metadata
})
export class FolderListComponent implements OnInit {

  /**
   * TODO input title - titolo visualizzato prima dell'elenco dei folder
   */


  /**
   * TODO input folderList - elenco dei folder visualizzati dal componente
   */


  /**
   * TODO input defaultFolder - nome folder selezionato
   */


  /**
   * TODO optional input allowCreate permette di avere due tipo di layout
   */


  /**
   * TODO output selectedFolder - evento emesso verso il padre alla selezione di un folder
   */

  currentFolder: string;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.title) {
      this.title = 'Folder list';
    }

    if (this.defaultFolder) {
      this.selectFolder(this.defaultFolder);
    }
  }

  addFolder(): void {
    // TODO add folder to list
    //  TODO discuss if it is better here or in the parent

    // TODO aggiungere controlli su inserimento
    // TODO aggiungere abilitazione pulsante

  }

  selectFolder(folder) {
    this.currentFolder = folder;
    const event: SelectFolderEvent = {
      folderName: folder
    };

    // TODO notify parent component
  }
}
