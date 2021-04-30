import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { DeleteCharPipe } from './pipes/delete-char.pipe';
import { JoinArrayPipe } from './pipes/join-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    DeleteCharPipe,
    JoinArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
