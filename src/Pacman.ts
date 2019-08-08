import GameObject, { RenderedObject } from "./GameObject";

class Pacman extends GameObject implements RenderedObject {
  private currentX: number = 200;
  private currentY: number = 200;
  private radius: number = 100;
  private howOpen: number = 0;
  private isOpeningMouth: boolean = true;

  private setHowOpen(howOpen: number) {
    this.howOpen = howOpen;
  }

  private setIsOpeningMouth(isOpeningMouth: boolean) {
    this.isOpeningMouth = isOpeningMouth;
  }

  update() {
    const step = 0.1;

    if (this.howOpen >= 1) {
      this.setIsOpeningMouth(false);
    }

    if (this.howOpen <= 0) {
      this.setIsOpeningMouth(true);
    }

    const newMouthValue = this.isOpeningMouth
      ? this.howOpen + step
      : this.howOpen - step;
    console.log(newMouthValue);
    this.setHowOpen(newMouthValue);
  }

  render() {
    const { context, howOpen, radius, currentX, currentY } = this;
    const maxAngle = 0.25;

    context.save();
    context.beginPath();
    context.arc(
      currentX,
      currentX,
      radius,
      maxAngle * howOpen * Math.PI,
      (2 - maxAngle * howOpen) * Math.PI
    );
    context.lineTo(currentX, currentY);
    context.fillStyle = "yellow";
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  }
}

export default Pacman;
