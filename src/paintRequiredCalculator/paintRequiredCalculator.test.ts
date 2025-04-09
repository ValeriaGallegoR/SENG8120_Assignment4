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

  test('should return the correct calculation paint required when rectangle length is 0', () => {
    const result = paintRequiredCalculator(0, 2, 100);
    expect(result).toBe(0);
  });

  test('should return the correct calculation paint required when rectangle height is 0', () => {
    const result = paintRequiredCalculator(-3, 2, 100);
    expect(result).toBe(0);
  });

  test('should return the correct calculation paint required when the client required 5000 copies', () => {
    const result = paintRequiredCalculator(3, 2, 5000);
    expect(result).toBe(45000);
  });

  test('should throw an error message when the number of copies is negative.', () => {
    expect(() => paintRequiredCalculator(10, 10, -1000)).toThrow("Length, height, and copies must be positive values.");
  });

  test('should throw an error message when rectangle length is negative.', () => {
    expect(() => paintRequiredCalculator(-50, 200, 2)).toThrow("Length, height, and copies must be positive values.");
  });

  test.todo('should throw an error message when rectangle height is negative.')
});