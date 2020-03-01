import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {MessageActionEvent} from '../../models/messageActionEvent';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  accountEmail = 'carlo.bonamico@gmail.com';

  draftForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.draftForm = this.fb.group({
      from: [this.accountEmail],
      to: ['', Validators.required],
      subject: [''],
      body: ['']
    });
  }

  ngOnInit() {
    if (this.draft) {
      this.draftForm.setValue(this.draft);
    }
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
