import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisMailViewComponent} from './nis-mail-view.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';
import {MessageViewerComponent} from './components/message-viewer/message-viewer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NisMailViewComponent,
    MailLogoComponent,
    MessageViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisMailViewComponent]
})
export class NisModule {
}
