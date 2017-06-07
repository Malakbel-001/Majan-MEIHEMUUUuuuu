import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, RoomFilterPipe} from './app.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomFilterPipe,
    RoomDetailComponent,
    TileComponent,
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
