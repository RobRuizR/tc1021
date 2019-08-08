import Grid from "./Grid";
import Ship from "./Ship";
import Asteroid from "./Asteroid";

const canv = document.getElementById("game-area") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canv.getContext("2d");
const myGrid = new Grid(context, {
  strokeColor: "teal",
  labelColor: "#333",
});
const ship = new Ship(context);
const asteroids: Asteroid[] = [];

for (let i = 0; i < 5; i++) {
  asteroids.push(new Asteroid(context));
}

myGrid.render();
ship.render();
asteroids.forEach(asteroid => asteroid.render());
