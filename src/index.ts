import Grid from "./Grid";
import Pacman from "./Pacman";

const canv = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canv.getContext("2d");
const myDrawing = new Grid(context, {
  strokeColor: "teal",
  labelColor: "#333",
});
const pacman = new Pacman(context);

setInterval(() => {
  context.clearRect(0, 0, canv.width, canv.height);
  myDrawing.render();
  pacman.update();
  pacman.render();
}, 1000 / 50);
