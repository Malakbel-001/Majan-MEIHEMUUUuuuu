import { Component, OnInit } from '@angular/core';

import { Room } from "../models/room";
import { Tile } from "../models/tile";
import { Template } from "../models/template";
import { HttpService } from "../services/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  ngOnInit(): void{
    this.load()
  }
  load(): void {
    this.httpService.getOpenRooms().then(rooms => this.rooms = rooms);
    this.httpService.getRoomTemplates().then(templates => this.templates = templates);
  }
  onRoomSelect(room: Room): void {
    this.selectedRoom = room;
    
    // Show data about which players are in the room
    this.httpService.getPlayersByGame(room.id).then(response => {
      let players = "";
      response.forEach(element => {
        players += "\n " + element._id
      });
      alert("There are " + response.length + " players in this room. \n" + players)
    });

    // Show data about the tiles
    // this.httpService.getTilesByGame(room.id).then(response => {
    //   console.log(response);
    //   let tiles = "";
    //   response.forEach(element => {
    //     tiles += "\n [" + element.xPos + ", " + element.yPos + ", " + element.zPos + "]"
    //   });
    //   alert("Tiles: \n" + tiles)
    // });
  }
  joinRoom(room: Room): void {
    this.isPlayerInRoom(room, (check: Boolean) => { 
      if(check){
        alert("You are already in this room, silly! :p")
      }
      else{
        this.httpService.postJoinRoom(room.id);
        alert("Join successful!")
      }
    })
  }
  // Works with callback
  isPlayerInRoom(room: Room, callback: (boolean) => void): void { 
    this.httpService.getPlayersByGame(room.id).then(response => {
      let match = response.find(player => player._id == "wm.aarts@student.avans.nl")
      callback(match)
    });
  }

  onTemplateSelect(template: Template): void {
    this.selectedTemplate = template;
  }
  createRoom(): void {
    let min = this.minPlayers
    let max = this.maxPlayers
    let template = this.selectedTemplate
    if(min >= max){
      alert("Maximum amount of players must be higher than the minimum amount of players!");
    } else if(min < 2 || max < 2 ){
      alert("Minimal and maximal amount of players both have to be at least 2!");
    } else if(template == undefined){
      alert("No template selected!");
    } else{
      // Do the POST request
      this.httpService.postNewRoom(template, min, max).then(r => alert("Room creation successful!"));
    }
  }

  title = 'Tour of Rooms';
  rooms: Room[];
  selectedRoom: Room;
  selectedTemplate: Template;
  templates: Template[];
  minPlayers = 2;
  maxPlayers = 5;

  constructor(private httpService: HttpService){}
}