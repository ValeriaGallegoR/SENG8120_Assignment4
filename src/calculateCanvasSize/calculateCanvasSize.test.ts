import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  
  test("should returns correct result", () => {
    const result = calculateCanvasSize(10, 100);
    expect(result).toEqual(1000);
  });

  test.todo("should throw an error message when the length is negative.");
  test.todo("should throw an error message when the width is negative.");
});