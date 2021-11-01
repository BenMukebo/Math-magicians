import operate from '../operate';

describe('My calculator action', () => {
  test('sum', () => {
    expect(operate(20, 4, '+')).toEqual('24');
  });
  test('substract', () => {
    expect(operate(20, 4, '-')).toEqual('16');
  });
  test('multiply', () => {
    expect(operate(20, 4, 'x')).toEqual('80');
  });
  test('divide', () => {
    expect(operate(20, 4, '÷')).toEqual('5');
  });
  test('mod', () => {
    expect(operate(20, 4, '%')).toEqual('0');
  });
});
