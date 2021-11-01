/** @format */

import calculate from '../calculate';
import operate from '../operate';

describe('calculate test', () => {
  const obj = { total: null, next: null, operation: '+' };
  test('should return obj with null variables', () => {
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('should return obj', () => {
    expect(calculate(obj, '8')).toEqual({ next: '8', operation: '+', total: null });
  });

  test('should return empty obj', () => {
    expect(calculate(obj, '=')).toEqual({});
  });

  const obj2 = { total: '16', next: '8', operation: '+' };
  test('should return obj which total is calculated', () => {
    expect(calculate(obj2, '=')).toEqual({ total: operate('16', '8', '+'), next: null, operation: null });
  });
});
