import compose from 'koa-compose';
import {KoaContext} from './koa-context.js';

export class KoaApp {
  constructor() {
    this.middleware = [];
    this.contextClass = class extends KoaContext { };
    this.ctx = this.contextClass.prototype;
  }

  use(fn) {
    this.middleware.push(fn);
  }

  handler() {
    let fn = compose(this.middleware);

    return async (req) => {
      let ctx = new this.contextClass(this, req);
      await fn(ctx);
      return ctx.response.finalize();
    }
  }
}
