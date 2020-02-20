import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nis-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header = 'this is header';
  @Input() footer = 'this is footer';

  constructor() {
  }

  ngOnInit(): void {
  }

}

