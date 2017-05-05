import { Component } from '@angular/core';

import { Room } from "../models/room";
import { HttpService } from "../services/http.service";

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {

  loadRooms(): void {
    this.rooms = this.httpService.getGames();
  }
  onSelect(room: Room): void {
    this.selectedRoom = room;
  }
  ngOnInit(): void{
    this.loadRooms()
  }

  title = 'Tour of Rooms';
  rooms: Room[];
  selectedRoom: Room;

  constructor(private httpService: HttpService){}
}
