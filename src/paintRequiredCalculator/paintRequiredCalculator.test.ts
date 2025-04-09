import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  
  test('should return the calculation paint required for 1 copy', () => {
    const result = paintRequiredCalculator(3, 2, 1);
    expect(result).toBe(8);
  });
});
