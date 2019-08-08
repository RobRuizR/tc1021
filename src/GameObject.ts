export interface RenderedObject {
  render(): void;
  update(): void;
}

class GameObject {
  protected readonly context: CanvasRenderingContext2D;
  protected readonly debugMode = true;

  public constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  protected getCanvasWidth() {
    return this.context.canvas.width;
  }

  protected getCanvasHeight() {
    return this.context.canvas.height;
  }
}

export default GameObject;
