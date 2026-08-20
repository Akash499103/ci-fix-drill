const { calculateDiscount } = require('./calculateDiscount');

test('applies no discount when percent is 0', () => {
  expect(calculateDiscount(100, 0)).toBe(100); // This passes
});

test('applies 10 percent discount correctly', () => {
  // FIX: calculateDiscount correctly returns 90 after a 10% discount, so the test expected value was wrong.
    expect(calculateDiscount(100, 10)).toBe(90); // WRONG — should be 90, not 100
});
