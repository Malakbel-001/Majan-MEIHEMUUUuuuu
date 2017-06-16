import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { MenuComponent, RoomFilterPipe} from './menu.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RoomFilterPipe,
    RoomDetailComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Point of entry for entire application
})
export class AppModule { }
