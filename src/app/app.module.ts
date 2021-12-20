import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BildComponent } from './bild/bild.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';


@NgModule({
  declarations: [
    AppComponent,
    BildComponent,
    TogglebuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
