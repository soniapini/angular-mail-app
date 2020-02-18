import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisComponent} from './nis.component';
import {MailMessageService} from './services/mail-message.service';

@NgModule({
  declarations: [
    NisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisComponent]
})
export class NisModule { }
