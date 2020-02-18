import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisMailViewComponent} from './nis-mail-view.component';
import {MailMessageService} from './services/mail-message.service';

@NgModule({
  declarations: [
    NisMailViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisMailViewComponent]
})
export class NisModule { }
