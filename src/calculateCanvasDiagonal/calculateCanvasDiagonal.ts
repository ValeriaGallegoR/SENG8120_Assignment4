export default function calculateCanvasSize(
  length: number | string ,
  width: number | string
) {
  const l = parseFloat(length as string);
  const w = parseFloat(width as string);

  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  return Math.sqrt(l * l + w * w);
}
