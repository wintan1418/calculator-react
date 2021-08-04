import calculate from './calculate';
import operate from './operate';

describe('Calculate', () => {
  let empty;

  beforeEach(() => {
    empty = { next: null, operation: null, total: null };
  });

  describe('Clearing (Using the AC button)', () => {
    test('Clears everything when AC is used', () => {
      const data1 = { next: '1', operation: '+' };
      const data2 = { next: '1', operation: '+', total: '123' };

      const result1 = calculate(data1, 'AC');
      const result2 = calculate(data2, 'AC');

      expect(result1).toEqual(empty);
      expect(result2).toEqual(empty);
    });
  });

  describe('Digit management', () => {
    test('Sets next to the specified digit when next & operation are empty', () => {
      const data = {};

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(empty, { next: '1' }));
    });

    test('Appends the specified digit to next when next already contains other digits', () => {
      const data = { next: '123' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(empty, { next: '1231' }));
    });

    test('Sets total to the specified digit when next & operation are filled and total is empty', () => {
      const data = { next: '1', operation: '+' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(data, { total: '1' }));
    });

    test('Clear everything if there\'s an error and handle the next button correctly', () => {
      const data = calculate({ next: '1', operation: '÷', total: '0' }, '+');

      const result = calculate(data, '3');

      expect(result).toEqual(Object.assign(empty, { next: '3' }));
    });

    test('Sets total to the specified digit when next & operation are filled and total contains digits', () => {
      const data = { next: '1', operation: '+', total: '123' };

      const result = calculate(data, '1');

      expect(result).toEqual(Object.assign(data, { total: '1231' }));
    });

    test('Ignores extra zeroes at the start', () => {
      const data = { next: '1', operation: '+', total: '0' };

      const result = calculate(data, '0');

      expect(result).toEqual(data);
    });
