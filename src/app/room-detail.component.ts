import { Component, Input } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'room-detail',
  templateUrl: './room-detail.component.html'
})

export class RoomDetailComponent {
  @Input() room: Room;
}