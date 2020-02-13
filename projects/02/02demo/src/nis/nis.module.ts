import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisComponent} from './nis.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';
import {MessageViewerComponent} from './components/message-viewer/message-viewer.component';

@NgModule({
  declarations: [
    NisComponent,
    MailLogoComponent,
    MessageViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisComponent]
})
export class NisModule {
}
