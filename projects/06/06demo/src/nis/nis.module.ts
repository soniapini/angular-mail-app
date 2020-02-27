import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NisMailViewComponent} from './nis-mail-view.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';
import {MailMessageService} from './services/mail-message.service';
import {MessageViewerComponent} from './components/message-viewer/message-viewer.component';
import {FolderListComponent} from './components/folder-list/folder-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageListComponent} from './components/message-list/message-list.component';
import {MessageComposerComponent} from './components/message-composer/message-composer.component';
import {MessageSearchComponent} from './components/message-search/message-search.component';
import {MessagesClientService} from './services/messages-client.service';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  declarations: [
    NisMailViewComponent,
    MailLogoComponent,
    MessageViewerComponent,
    FolderListComponent,
    MessageListComponent,
    MessageComposerComponent,
    MessageSearchComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    MailMessageService,
    MessagesClientService
  ],
  bootstrap: [NisMailViewComponent]
})
export class NisModule {
}
