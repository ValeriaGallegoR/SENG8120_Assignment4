export default function paintRequiredCalculator(length: number, height: number, copies: number): number {

  if (length <= 0 || height <= 0 || copies < 0) {
        throw new Error('Length, height, and copies must be positive values.');
      }
        
  const rectangleArea = length * height;
  const triangleArea = (length / 3) * height * 0.5;
  const totalAreaPerCopy = rectangleArea + 2 * triangleArea;

  return totalAreaPerCopy * copies;
}
