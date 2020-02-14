import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Message} from '../../models/message';


@Component({
  selector: 'nis-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, OnChanges {

  /**
   * TODO input messages - elenco messaggi da visualizzare
   */

  /**
   * TODO input title -
   */

  /**
   * TODO output - evento inivato al parent ogni volta che cambia il current message
   */

    // TODO implement componente 'star'

    // TODO ADVANCED - implement multiple message selection

  currentMessageIndex = 0;
  currentMessage: Message;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setCurrentMessage(index) {
    // this.currentMessage = this.messages[index];
    this.currentMessageIndex = index;

    // TODO emit event notification to parent component
  }

  next() {

  }

  prev() {

  }


}
