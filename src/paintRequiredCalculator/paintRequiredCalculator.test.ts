import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return the correct calculation paint required for 2 copy", () => {
    const result = paintRequiredCalculator(50, 10, 2);
    expect(result).toBeCloseTo(1333.33, 2);
  });
  
  test('should return the correct calculation paint required for 1 copy', () => {
    const result = paintRequiredCalculator(3, 2, 1);
    expect(result).toBe(8);
  });

  test('should handle non-integer rectangle dimensions and return the correct value', () => {
    const result = paintRequiredCalculator(2.5, 1.5, 200);
    expect(result).toBeCloseTo(1000);
  });

  test('should return the correct calculation paint required if number of copies is 0', () => {
    const result = paintRequiredCalculator(3, 2, 0);
    expect(result).toBe(0);
  });

  test.todo('should return the correct calculation paint required when rectangle length is 0');
  test.todo('should return the correct calculation paint required when rectangle height is 0');
});

