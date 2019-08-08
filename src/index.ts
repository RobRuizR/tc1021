interface RenderedObject {
  render(): void;
}

class GameObject {
  protected readonly context: CanvasRenderingContext2D;

  public constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  protected getWidth() {
    return this.context.canvas.width;
  }

  protected getHeight() {
    return this.context.canvas.height;
  }
}

class MotivationalPoster extends GameObject {
  render() {
    context.strokeStyle = "rgba(0, 0, 100, 0.3)";

    for (let x = 0; x < canvas.width; x += 10) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
      context.lineWidth = x % 50 == 0 ? 1 : 0.5;
      context.stroke();
    }

    for (let y = 0; y < canvas.height; y += 10) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
      context.lineWidth = y % 50 == 0 ? 1 : 0.5;
      context.stroke();
    }

    // Applies current stroke style and line width to the entire current path.
    // context.stroke();
  }
}

const canvas = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const myDrawing = new MotivationalPoster(context);

myDrawing.render();
