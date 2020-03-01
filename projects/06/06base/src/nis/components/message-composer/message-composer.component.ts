import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {MessageActionEvent} from '../../models/messageActionEvent';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'nis-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss']
})
export class MessageComposerComponent implements OnInit {
  @Input() draft: Message;

  @Output() sendMail = new EventEmitter<MessageActionEvent>();

  @Output() saveMail = new EventEmitter<MessageActionEvent>();

  @Output() cancelMail = new EventEmitter<MessageActionEvent>();

  // @ViewChild('draftForm') draftForm;

  accountEmail = 'carlo.bonamico@gmail.com';
  draftForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    if (!this.draft) {
      this.draft = this.getDefaultMessage();
    }
  }

  // this.accountEmail = AccountService.getAccountEmail();

  initForm() {
    this.draftForm = this.fb.group({
      from: [],
      to: [],
      subject: [],
      body: []
    });
  }

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
