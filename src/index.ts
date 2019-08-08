import Grid from "./Grid";

const canv = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canv.getContext("2d");
const myDrawing = new Grid(context, {
  strokeColor: "teal",
  labelColor: "#333",
});

const mySecondDrawing = new Grid(context, {
  strokeColor: "red",
  includeLabels: false,
  smallStep: 5,
  bigStep: 25,
  secondaryLineWidth: 0.1,
  mainLineWidth: 0.5,
});

context.beginPath();
context.strokeStyle = "#BB0000";
context.fillStyle = "#005";
context.lineWidth = 2;
context.moveTo(50, 50);
context.lineTo(150, 250);
context.lineTo(250, 170);
context.closePath();
context.fill();
context.stroke();
context.fillText("(50, 50)", 30, 40);
context.fillText("(150, 250)", 130, 260);
context.fillText("(250, 170)", 255, 175);

mySecondDrawing.render();
myDrawing.render();
