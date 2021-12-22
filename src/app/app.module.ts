import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
