import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';


@Component({
  selector: 'nis-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.scss']
})
export class MessageViewerComponent implements OnInit {
  @Input() message: Message;

  constructor() {
  }

  ngOnInit(): void {
  }

  onReply() {
    console.log('Azione Reply su messaggio ', this.message);
  }

  onForward() {
    console.log('Azione Forward su messaggio ', this.message);
  }

  onDelete() {
    console.log('Azione Delete su messaggio ', this.message);
  }
}
