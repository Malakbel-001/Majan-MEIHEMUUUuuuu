import { Player } from "./player";
import { Template } from "./template";

export class Room {
  id: string;
  createdBy: Player;
  createdOn: String;
  gameTemplate: Template;
  state: String;
  maxPlayers: Number;
  minPlayers: Number;
  players: Player[];
}