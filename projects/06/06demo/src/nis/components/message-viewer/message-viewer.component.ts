import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {MessageActionEvent} from '../../models/messageActionEvent';


@Component({
  selector: 'nis-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.scss']
})
export class MessageViewerComponent implements OnInit {

  @Input() message: Message;

  @Output() reply = new EventEmitter<MessageActionEvent>();

  @Output() forward = new EventEmitter<MessageActionEvent>();

  @Output() delete = new EventEmitter<MessageActionEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onReplyAction() {
    this.reply.emit({
      message: this.message
    });
  }

  onForwardAction() {
    this.forward.emit({
      message: this.message
    });
  }

  onDeleteAction() {
    // TODO ask for confirmation
    this.delete.emit({
      message: this.message
    });
  }

}
