import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BildComponent } from './bild/bild.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { ImageTableComponent } from './image-table/image-table.component';


@NgModule({
  declarations: [
    AppComponent,
    BildComponent,
    TogglebuttonComponent,
    ImageTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
