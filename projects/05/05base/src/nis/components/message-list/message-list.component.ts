import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Message} from '../../models/message';
import {MessageActionEvent} from '../../models/messageActionEvent';


@Component({
  selector: 'nis-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit, OnChanges {

  /**
   * elenco messaggi da visualizzare
   */
  @Input() messages: Array<Message>;

  /**
   * titolo visualizzato dal componente prima dei messaggi
   */
  @Input() title: string;

  /**
   * evento inivato al parent ogni volta che cambia il current message
   */
  @Output() currentMessageChanged = new EventEmitter<MessageActionEvent>();


  currentMessageIndex = 0;
  currentMessage: Message;

  ngOnInit() {
    if (!this.messages) {
      this.messages = [];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    // TODO implementare la gestione dei messaggi e messaggio corrente al cambio dell'input
  }

  setCurrentMessage(index) {
    this.currentMessage = this.messages[index];
    this.currentMessageIndex = index;

    const event: MessageActionEvent = {
      message: this.currentMessage
    };
    this.currentMessageChanged.emit(event);
  }

  next() {
    if (this.currentMessageIndex < this.messages.length - 1) {
      this.currentMessageIndex++;
    }

    this.setCurrentMessage(this.currentMessageIndex);
  }

  prev() {
    if (this.currentMessageIndex > 0) {
      this.currentMessageIndex--;
    }

    this.setCurrentMessage(this.currentMessageIndex);
  }
}
