import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from '../../models/message';

@Component({
  selector: 'nis-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss']
})
export class MessageComposerComponent implements OnInit {

  constructor() {
  }

  /**
   * TODO input draft - messaggio draft da visualizzare se presente
   */

  /**
   * TODO output sendMail - evento emesso verso il parent componente al click del button Send
   */

  /**
   * TODO output saveMail - evento emesso verso il parent componente al click del button save
   */

  /**
   * TODO output cancelMail - evento emesso verso il parent componente al click del button cancel
   */

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
    // TODO implement
  }

  save() {
    // TODO implement
  }

  cancel() {
    // TODO implement
  }

}
