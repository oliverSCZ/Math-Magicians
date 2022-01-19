import operate from '../logic/operate';
describe('Testing operate.js functions', () => {
  test('testing + operation', () => {
    expect(operate('11', '2', '+')).toEqual('13');
  });
  test('testing x operation', () => {
    expect(operate('11', '2', 'x')).toEqual('22');
  });
  test('testing - operation', () => {
    expect(operate('11', '5', '-')).toEqual('6');
  });
  test('testing ÷ operation', () => {
    expect(operate('30', '6', '÷')).toEqual('5');
  });
  test('testing % operation', () => {
    expect(operate('10', '3', '%')).toEqual('1');
  });
  test('testing ÷ operation to throw an error', () => {
    expect(operate('30', '0', '÷')).toEqual("Can't divide by 0.");
  });
  test('testing ÷ operation to throw an error', () => {
    expect(() => operate('30', '0', '$')).toThrow("Unknown operation '$'");
  });
});