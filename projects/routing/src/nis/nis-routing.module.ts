import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageListComponent} from './components/message-list/message-list.component';
import {MessageDetailComponent} from './components/message-detail/message-detail.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MessageListPageComponent} from './components/message-list-page/message-list-page.component';

const routes: Routes = [
  {path: 'messages', component: MessageListComponent},
  {path: 'message/:id', component: MessageDetailComponent},
  {
    path: 'inbox',
    component: MessageListPageComponent,
    data: {title: 'Inbox', folder: 'inbox'}
  },
  {
    path: '',
    redirectTo: '/inbox',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NisRoutingModule {
}
