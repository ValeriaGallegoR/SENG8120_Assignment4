export default function paintRequiredCalculator(length: number, height: number, copies: number): number {

  const rectangleArea = length * height;
  const triangleArea = (length / 3) * height * 0.5;
  const totalAreaPerCopy = rectangleArea + 2 * triangleArea;

  return totalAreaPerCopy * copies;
}
