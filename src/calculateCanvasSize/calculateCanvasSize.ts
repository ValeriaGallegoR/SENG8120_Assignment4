export default function calculateCanvasSize(
  length: number,
  width: number
) {
  if (length < 0){
    throw new Error("Length should be positive");
  }
  if (width < 0){
    throw new Error("Width should be positive");
  }
  return length * width;
}