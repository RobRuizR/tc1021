import defaults from "lodash.defaults";
import GameObject from "./GameObject";

interface GridOptions {
  strokeColor?: string;
  mainLineWidth?: number;
  secondaryLineWidth?: number;
  smallStep?: number;
  bigStep?: number;
  includeLabels?: boolean;
  labelColor?: string;
}

class Grid extends GameObject {
  private options: GridOptions;

  constructor(context: CanvasRenderingContext2D, options?: GridOptions) {
    super(context);
    const defaultOptions: GridOptions = {
      strokeColor: "rgba(0, 0, 100, 0.3)",
      mainLineWidth: 1,
      secondaryLineWidth: 0.5,
      smallStep: 10,
      bigStep: 50,
      includeLabels: true,
      labelColor: "rgba(0, 0, 100, 0.3)",
    };
    this.options = defaults(options, defaultOptions);
  }

  render() {
    if (!this.debugMode) return;

    const { context } = this;
    const height = this.getCanvasHeight();
    const width = this.getCanvasWidth();
    context.save();

    const {
      strokeColor,
      mainLineWidth,
      secondaryLineWidth,
      smallStep,
      bigStep,
      includeLabels,
      labelColor,
    } = this.options;

    context.strokeStyle = strokeColor;
    context.fillStyle = labelColor;

    for (let x = 0; x < width; x += smallStep) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.lineWidth =
        x % bigStep === 0 ? mainLineWidth : secondaryLineWidth;
      context.stroke();
      if (includeLabels && x % 50 === 0) {
        context.fillText(x.toString(), x, 10);
      }
    }

    for (let y = 0; y < height; y += smallStep) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.lineWidth = y % bigStep == 0 ? mainLineWidth : secondaryLineWidth;
      context.stroke();
      if (includeLabels && y % 50 === 0) {
        context.fillText(y.toString(), 0, y);
      }
    }
    context.restore();
  }
}

export default Grid;
