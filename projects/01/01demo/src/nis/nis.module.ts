import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NisComponent } from './nis.component';
import { MailLogoComponent } from './components/mail-logo/mail-logo.component';

@NgModule({
  declarations: [
    NisComponent,
    MailLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NisComponent]
})
export class NisModule { }
