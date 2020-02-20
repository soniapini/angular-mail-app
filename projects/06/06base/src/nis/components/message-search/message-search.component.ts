import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nis-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.scss']
})
export class MessageSearchComponent implements OnInit {

  /**
   * TODO input defaultQuery - opzionale stringa da cercare
   */


  /**
   * TODO output searchAction
   */

  query: string;

  constructor() {
    // inizializzare il componente in modo opportuno
  }

  ngOnInit(): void {

  }


  search() {
    //  TODO completare il metodo
  }
}
