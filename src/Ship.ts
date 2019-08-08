import GameObject, { RenderedObject } from "./GameObject";

class Ship extends GameObject implements RenderedObject {
  private x: number = 200;
  private y: number = 200;
  private radius: number = 75;

  update() {}
  render() {
    const { x, y, radius, context } = this;
    context.save();
    context.translate(x, y);

    if (this.debugMode) {
      context.strokeStyle = "white";
      context.fillStyle = "rgba(0, 0, 0, 0.25)";
      context.lineWidth = 0.5;
      context.beginPath();
      context.arc(0, 0, radius, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }

    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "black";
    let angle = (0.5 * Math.PI) / 2;
    context.beginPath();
    context.moveTo(radius, 0);
    context.lineTo(
      Math.cos(Math.PI - angle) * radius,
      Math.sin(Math.PI - angle) * radius
    );
    context.lineTo(
      Math.cos(Math.PI + angle) * radius,
      Math.sin(Math.PI + angle) * radius
    );
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}

export default Ship;
