import {Bodies, Body} from 'matter-js';

export abstract class BodyBase {

  protected constructor() {
    this._body = Bodies.rectangle(0, 0, 0, 0);
  }

  protected _body: Body;

  get body(): Body {
    return this._body;
  }

  show(): void {
    p5.push();
    p5.fill(this._body.render.fillStyle!);
    p5.noStroke();
    p5.rotate(p5.radians(this.body.angle));
    p5.beginShape();
    for (let point of this._body.vertices) {
      p5.vertex(point.x, point.y);
    }
    p5.endShape();
    p5.pop();
  }
}
