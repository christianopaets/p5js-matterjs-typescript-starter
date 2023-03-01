import './style.css';
import {BaseSketch} from './base/sketch.base';
import {Box} from './models/box';
import {Ground} from './models/ground';

class Sketch extends BaseSketch {

  private _canvasWidth = 1440;
  private _canvasHeight = 810;

  private readonly box: Box = new Box(100, 100, 50, 50);
  private ground: Ground = new Ground(this._canvasWidth / 2, this._canvasHeight - 25, this._canvasWidth, 50);

  setup(): void {
    p5.createCanvas(this._canvasWidth, this._canvasHeight);
    this._addBodiesToWorld(this.box.body, this.ground.body);
  }

  draw(): void {
    p5.background(255);
    this.box.show();
    this.ground.show();
  }
}

new Sketch();
