import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Message} from '../../models/message';
import {MessageChangedEvent} from '../../models/messageChangedEvent';


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
   * TODO output - evento inivato al parent ogni volta che cambia il current message
   */
  @Output() currentMessageChanged = new EventEmitter<MessageChangedEvent>();


  currentMessageIndex = 0;
  currentMessage: Message;

  ngOnInit() {
    if (!this.messages) {
      this.messages = [];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.messages) {
      this.currentMessageIndex = 0;

      if (this.messages && this.messages.length) {
        this.setCurrentMessage(this.currentMessageIndex);
      }
    }
  }

  setCurrentMessage(index) {
    this.currentMessage = this.messages[index];
    this.currentMessageIndex = index;

    const event: MessageChangedEvent = {
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
