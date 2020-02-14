import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from '../../models/message';
import {MessageActionEvent} from '../../models/messageActionEvent';

@Component({
  selector: 'nis-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss']
})
export class MessageComposerComponent implements OnInit {

  constructor() {
  }

  @Input() draft: Message;

  @Output() sendMail = new EventEmitter<MessageActionEvent>();

  @Output() saveMail = new EventEmitter<MessageActionEvent>();

  @Output() cancelMail = new EventEmitter<MessageActionEvent>();

  @ViewChild('draftForm') draftForm;

  accountEmail = 'carlo.bonamico@gmail.com';

  ngOnInit() {
    if (!this.draft) {
      this.draft = this.getDefaultMessage();
    }
  }

  // this.accountEmail = AccountService.getAccountEmail();

  getDefaultMessage() {
    const draftMessage: Message = {
      from: this.accountEmail,
      to: '',
      subject: '',
      body: ''
    };
    return draftMessage;
  }

  send() {
    console.log(this.draftForm);
    this.sendMail.emit({
      message: this.draft
    });
  }

  save() {
    this.saveMail.emit({
      message: this.draft
    });
  }

  cancel() {
    this.cancelMail.emit();
  }

}
