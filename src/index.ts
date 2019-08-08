interface GameObject {
  render(): void;
}

class MotivationalPoster implements GameObject {
  private readonly context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  render() {
    const canvasWidth = this.context.canvas.width;
    const canvasHeight = this.context.canvas.height;
    this.context.fillStyle = "dimgrey";
    this.context.strokeStyle = "lightgrey";
    this.context.lineWidth = 5;
    this.context.rect(75, 50, canvasWidth - 150, canvasHeight - 100);
    this.context.fill();
    this.context.stroke();

    this.context.font = "34px Arial";
    this.context.strokeStyle = "#FF2222";
    this.context.fillStyle = "#FFAAAA";
    this.context.lineWidth = 0.75;
    this.context.textAlign = "center";
    const msg = "2D Drawing";
    this.context.fillText(msg, canvasWidth / 2, 100);
    this.context.strokeText(msg, canvasWidth / 2, 100);

    this.context.strokeStyle = "#FFFFFF";
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.arc(200, 140, 20, 0, Math.PI * 2);
    this.context.moveTo(200, 160);
    this.context.lineTo(200, 220);
    this.context.moveTo(180, 300);
    this.context.lineTo(185, 260);
    this.context.lineTo(200, 220);
    this.context.lineTo(215, 260);
    this.context.lineTo(220, 300);
    this.context.moveTo(240, 130);
    this.context.lineTo(225, 170);
    this.context.lineTo(200, 170);
    this.context.lineTo(175, 180);
    this.context.lineTo(170, 220);
    this.context.stroke();

    const msg2 = "its quite easy";
    this.context.strokeStyle = "#FF2222";
    this.context.fillStyle = "#FFAAAA";
    this.context.font = "24px Arial";
    this.context.strokeText(msg2, canvas.width / 2, 330);
    this.context.fillText(msg2, canvas.width / 2, 330);
  }
}

const canvas = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const myDrawing = new MotivationalPoster(context);

myDrawing.render();
