import { Scene } from "phaser";
import { Room, Client } from "colyseus.js";

export class Game extends Scene {
  room: Room;

  constructor() {
    super("Game");
  }

  async create() {
    const height: number = this.cameras.main.height;
    const width: number = this.cameras.main.width;
    this.scene.launch("background");
    
    this.add.rectangle(width * 0.1, height * 0.2,
                       width * 0.15, height * 0.6, 0xFF0000).setOrigin(0);

    this.add.rectangle(width * 0.75, height * 0.2,
                       width * 0.15, height * 0.6, 0x00FF00).setOrigin(0);

    this.add.rectangle(0, height * 0.65,
                       width, height, 0xCCCCCC).setOrigin(0);
    
  }
}
