import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
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
import {Logger, LoggerImplService} from './services/logger.service';
import {NisRoutingModule} from './nis-routing.module';
import {MessageDetailComponent} from './components/message-detail/message-detail.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MessageListPageComponent} from './components/message-list-page/message-list-page.component';

export const APP_TITLE = new InjectionToken<string>('title');

@NgModule({
  declarations: [
    NisMailViewComponent,
    MailLogoComponent,
    MessageViewerComponent,
    FolderListComponent,
    MessageListComponent,
    MessageComposerComponent,
    MessageSearchComponent,
    HighlightDirective,
    MessageDetailComponent,
    PageNotFoundComponent,
    MessageListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NisRoutingModule
  ],
  providers: [
    MailMessageService,
    MessagesClientService,
    {provide: Logger, useClass: LoggerImplService},
    {provide: APP_TITLE, useValue: 'Sonia WebApp Mail'}
  ],
  bootstrap: [NisMailViewComponent]
})
export class NisModule {
}
