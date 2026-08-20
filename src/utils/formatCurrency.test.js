const { formatCurrency } = require('./formatCurrency');

test('formats currency correctly', () => {
  // WRONG — toBe fails on objects, should use toEqual
  // FIX: formatCurrency returns an object, so toEqual must be used for value equality instead of toBe reference equality.
    expect(formatCurrency(10.005, 'USD')).toEqual({ amount: 10.01, currency: 'USD' });
});
