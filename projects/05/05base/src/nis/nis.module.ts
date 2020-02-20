import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NisMailViewComponent} from './nis-mail-view.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';
import {MessageViewerComponent} from './components/message-viewer/message-viewer.component';
import {FolderListComponent} from './components/folder-list/folder-list.component';
import {FormsModule} from '@angular/forms';
import {MessageListComponent} from './components/message-list/message-list.component';
import {MessageComposerComponent} from './components/message-composer/message-composer.component';

@NgModule({
  declarations: [
    NisMailViewComponent,
    MailLogoComponent,
    MessageViewerComponent,
    FolderListComponent,
    MessageListComponent,
    MessageComposerComponent
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
