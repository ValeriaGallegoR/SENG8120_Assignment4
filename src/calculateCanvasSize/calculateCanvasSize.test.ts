import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  
  test("should returns correct result", () => {
    const result = calculateCanvasSize(10, 100);
    expect(result).toEqual(1000);
  });

  test("should throw an error message when the length is negative.", () => {
    expect(() => calculateCanvasSize(-10, 100)).toThrow("Length should be positive");
  });

  test("should throw an error message when the width is negative.", () => {
    expect(() => calculateCanvasSize(10, -100)).toThrow("Width should be positive");
  });

  test("should returns correct result when length is zero", () => {
    const result = calculateCanvasSize(0, 100);
    expect(result).toEqual(0);
  });

  test.todo("should returns correct result when width is zero");
});