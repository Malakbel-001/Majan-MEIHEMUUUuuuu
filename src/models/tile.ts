export class Tile {
  xPos: number;
  yPos: number;
  zPos: number;
  tile: TileData;
}

export class TileData{
  name: string;
  suit: string;
  matchesWholeSuit: Boolean;
}