import {Bodies} from 'matter-js';
import {BodyBase} from '../base/body.base';

export class Ground extends BodyBase {

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this._body = Bodies.rectangle(x, y, width, height, {
      isStatic: true,
      friction: 0,
      restitution: 1,
      render: {
        fillStyle: '#10AA11'
      }
    });
  }
}
