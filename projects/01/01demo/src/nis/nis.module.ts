import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisMailViewComponent} from './nis-mail-view.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';

@NgModule({
  declarations: [
    NisMailViewComponent,
    MailLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisMailViewComponent]
})
export class NisModule { }
