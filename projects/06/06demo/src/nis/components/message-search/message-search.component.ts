import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nis-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.scss']
})
export class MessageSearchComponent implements OnInit {

  /**
   * input defaultQuery - opzionale stringa da cercare
   */
  @Input() defaultQuery: string;

  @Output() searchAction: EventEmitter<string> = new EventEmitter<string>();

  query: string;

  constructor() {
    if (this.defaultQuery) {
      this.query = this.defaultQuery;
    } else {
      this.query = '';
    }
  }

  ngOnInit(): void {

  }


  search() {
    this.searchAction.emit(this.query);
  }
}
