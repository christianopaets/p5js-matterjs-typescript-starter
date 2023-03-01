import P5 from 'p5';
import { Global } from './p5.global';
import { Sketch } from './sketch.interface';
import {Body, Composite, Engine, World} from 'matter-js';

export abstract class BaseSketch implements Sketch {
  private readonly _p5Sketch: P5;

  readonly engine: Engine = Engine.create();

  get world(): World {
    return this.engine.world;
  }

  get p5(): P5 {
    return this._p5Sketch;
  }

  preload(): void {}

  abstract setup(): void;

  abstract draw(): void;

  constructor() {
    const sketch = this._createSketch();
    this._p5Sketch = new P5(sketch);
  }

  protected _addBodiesToWorld(...bodies: Body[]): void {
    Composite.add(this.world, bodies);
  }

  private _createSketch(): (p5: P5) => void {
    return (p5: P5) => {
      Global.setP5(p5);
      p5.preload = this.preload.bind(this);
      p5.setup = this.setup.bind(this);
      p5.draw = () => {
        this.draw.call(this);
        Engine.update(this.engine);
      }
    };
  }
}
