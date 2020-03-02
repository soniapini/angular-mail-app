import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageDetailComponent} from './components/message-detail/message-detail.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MessageListPageComponent} from './components/message-list-page/message-list-page.component';
import {MailLogoComponent} from './components/mail-logo/mail-logo.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MailLogoComponent,
    outlet: 'pubblicita'
  },
  {
    path: 'messages',
    component: MessageListPageComponent
  },
  {path: 'message/:id', component: MessageDetailComponent},
  {
    path: 'inbox',
    component: MessageListPageComponent,
    data: {title: 'Inbox', folder: 'inbox'}
  },
  {
    path: 'inbox',
    component: PageNotFoundComponent,
    outlet: 'pubblicita',
    data: {title: 'Inbox', folder: 'inbox'}
  },
  {
    path: '',
    redirectTo: '/inbox(pubblicita:inbox)',
    pathMatch: 'full',
  },
  {path: '**', component: PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NisRoutingModule {
}
