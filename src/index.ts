import Grid from "./Grid";

const canv = document.getElementById("game-area") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canv.getContext("2d");
const myDrawing = new Grid(ctx, {
  strokeColor: "teal",
  labelColor: "blue",
  includeLabels: false,
});
const mySecondDrawing = new Grid(ctx, {
  strokeColor: "red",
  labelColor: "blue",
  includeLabels: false,
  smallStep: 5,
  bigStep: 25,
  secondaryLineWidth: 0.1,
  mainLineWidth: 0.5,
});

mySecondDrawing.render();
myDrawing.render();
