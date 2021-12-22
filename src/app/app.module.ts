import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BildComponent } from './bild/bild.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { ImageTableComponent } from './image-table/image-table.component';
import {RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { SingleImagePageComponent } from './single-image-page/single-image-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'image-table', component: ImageTableComponent},
  {path: 'image', component: SingleImagePageComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    BildComponent,
    TogglebuttonComponent,
    ImageTableComponent,
    NavbarComponent,
    HomePageComponent,
    SingleImagePageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
