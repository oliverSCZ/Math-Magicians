import calculate from '../logic/calculate';

describe('Tests for calculate.js functions', () => {
  test('Tests the return of button AC', () => {
    expect(
      calculate(
        {
          total: 0,
          next: null,
          operation: null,
        },
        'AC',
      ),
    ).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Tests a + operation', () => {
    expect(calculate({ total: '5', next: '3', operation: '+' }, '=')).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  test('Tests a +/- operation', () => {
    expect(
      calculate({ total: '5', next: null, operation: null }, '+/-'),
    ).toEqual({
      total: '-5',
      next: null,
      operation: null,
    });
  });

  test('Tests a . operation', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '.')).toEqual(
      {
        total: null,
        next: '5.',
        operation: null,
      },
    );
  });
});
