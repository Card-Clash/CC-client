import { Scene } from "phaser";
import { Room, Client } from "colyseus.js";

export class Game extends Scene {
  room: Room;

  constructor() {
    super("Game");
  }

  async create() {
    const HEIGHT: number = this.cameras.main.height;
    const WIDTH: number = this.cameras.main.width;
    this.scene.launch("background");

    this.add
      .rectangle(
        WIDTH * 0.1,
        HEIGHT * 0.2,
        WIDTH * 0.15,
        HEIGHT * 0.6,
        0xff0000,
      )
      .setOrigin(0);

    this.add
      .rectangle(
        WIDTH * 0.75,
        HEIGHT * 0.2,
        WIDTH * 0.15,
        HEIGHT * 0.6,
        0x00ff00,
      )
      .setOrigin(0);

    this.add.rectangle(0, HEIGHT * 0.65, WIDTH, HEIGHT, 0xcccccc).setOrigin(0);
  }
}
