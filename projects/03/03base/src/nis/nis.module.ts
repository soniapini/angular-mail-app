import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisComponent} from './nis.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';
import {MessageViewerComponent} from './components/message-viewer/message-viewer.component';
import {FolderListComponent} from './components/folder-list/folder-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NisComponent,
    MailLogoComponent,
    MessageViewerComponent,
    FolderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailMessageService],
  bootstrap: [NisComponent]
})
export class NisModule {
}
