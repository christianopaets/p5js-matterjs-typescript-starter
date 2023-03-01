import {Bodies} from 'matter-js';
import {BodyBase} from '../base/body.base';

export class Box extends BodyBase {

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this._body = Bodies.rectangle(x, y, width, height, {
      restitution: 1
    });
  }
}
