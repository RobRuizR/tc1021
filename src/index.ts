import Engine from "./Engine";

const canv = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canv.getContext("2d");
const engine = new Engine(context);
engine.start();
