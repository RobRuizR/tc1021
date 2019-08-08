import { RenderedObject } from "./GameObject";
import Pacman from "./Pacman";
import Grid from "./Grid";
import Asteroid from "./Asteroid";

class Engine {
  private renderedObjects: RenderedObject[] = [];
  private interval: number;
  private context: CanvasRenderingContext2D;

  constructor(context) {
    this.context = context;
    this.renderedObjects.push(
      new Grid(context, {
        strokeColor: "teal",
        labelColor: "#333",
      })
    );

    this.renderedObjects.push(new Pacman(context));
    for (let i = 0; i < 5; i++) {
      this.renderedObjects.push(new Asteroid(context));
    }
  }

  start() {
    const { renderedObjects, context } = this;

    this.interval = setInterval(() => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      renderedObjects.forEach(gameObject => {
        gameObject.update();
        gameObject.render();
      });
    }, 1000 / 60);
  }

  die() {
    clearInterval(this.interval);
  }
}

export default Engine;
