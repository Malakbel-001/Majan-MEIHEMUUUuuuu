import { Player } from "./player";

export class Room {
  id: number;
  started: boolean;
  template: String;
  players: Player[];
}