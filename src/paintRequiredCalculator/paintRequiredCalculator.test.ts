import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return the calculation paint required for 2 copy", () => {
    const result = paintRequiredCalculator(50, 10, 2);
    expect(result).toBeCloseTo(1333.33, 2);
  });
  
  test('should return the calculation paint required for 1 copy', () => {
    const result = paintRequiredCalculator(3, 2, 1);
    expect(result).toBe(8);
  });

  test.todo('should handle non-integer rectangle dimensions and return the correct value');
});

