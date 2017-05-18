import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoomDetailComponent } from './room-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Point of entry for entire application
})
export class AppModule { }
