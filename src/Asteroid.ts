import GameObject, { RenderedObject } from "./GameObject";
import defaults from "lodash.defaults";

type AsteroidOptions = {
  segments?: number;
  strokeStyle?: string;
  fillStyle?: string;
  radius?: number;
  noise?: number;
};

class Asteroid extends GameObject implements RenderedObject {
  private options: AsteroidOptions;
  private x: number;
  private y: number;
  private sections: number[];
  private angle: number = 0;
  private previousUpdateTime: Date;

  constructor(context: CanvasRenderingContext2D, options?: AsteroidOptions) {
    super(context);
    const defaultOptions: AsteroidOptions = {
      fillStyle: "black",
      strokeStyle: "white",
      radius: 30,
      segments: 16,
      noise: 0.4,
    };
    this.previousUpdateTime = new Date();
    const width = this.getCanvasWidth();
    const height = this.getCanvasHeight();

    this.options = defaults(options, defaultOptions);

    const { radius, noise, segments } = this.options;
    this.y = Math.floor(Math.random() * (height - radius * 2)) + radius;
    this.x = Math.floor(Math.random() * (width - radius * 2)) + radius;

    this.sections = [];
    for (let i = 0; i < segments; i++) {
      this.sections.push(radius + radius * noise * (Math.random() - 0.5));
    }
  }

  private setAngle(angle: number) {
    this.angle = angle;
  }

  update() {
    const currentAngle = this.angle;
    const currentTime = new Date();
    const deltaTimeSeconds =
      (Number(currentTime) - Number(this.previousUpdateTime)) / 1000;

    // Update angle based on the time that has passed since last update
    this.setAngle((currentAngle + 3 * deltaTimeSeconds) % 360);
    this.previousUpdateTime = currentTime;
  }

  render() {
    const { context, options, x, y, sections, angle } = this;
    const { fillStyle, strokeStyle, radius, segments } = options;

    context.save();
    context.beginPath();

    context.translate(x, y);
    context.rotate(angle);
    context.strokeStyle = strokeStyle;
    context.fillStyle = fillStyle;
    for (let i = 0; i < segments; i++) {
      context.rotate((2 * Math.PI) / segments);
      context.lineTo(sections[i], 0);
    }
    context.closePath();
    context.fill();
    context.stroke();

    if (this.debugMode) {
      context.lineWidth = 0.5;
      context.beginPath();
      context.arc(0, 0, radius, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
    }

    context.restore();
  }
}

export default Asteroid;
