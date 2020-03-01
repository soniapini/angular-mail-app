import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

  searchString = new FormControl('');

  constructor() {
    if (this.defaultQuery) {
      this.query = this.defaultQuery;
    } else {
      this.query = '';
    }
  }

  ngOnInit(): void {
    if (this.defaultQuery) {
      this.searchString.setValue(this.defaultQuery);
      this.searchString.setValidators(Validators.required);
    }

    this.searchString.valueChanges.subscribe((value) => console.log('nuovo valore per FromControl', value));
  }


  search() {
    console.log('Richiesta Search per: ', this.searchString.value);
    this.searchAction.emit(this.searchString.value);
  }
}
