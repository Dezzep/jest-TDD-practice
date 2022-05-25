import {sum, multiply, subtract, divide} from './sum';
import { capitalize, reverseString} from './capitalize';

// reverseString test
test('the string is reversed', () => {
  expect(reverseString(' string reversed ')).toBe('desrever gnirts');
})

// capitalize testing

test('capitalizing the first letter of a string', () => {
  expect(capitalize('sTRINg')).toBe('String')
});


//addition
test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 1)).toBe(3);
});
//multiplication

test('multiply 2 * 12 to equal 24', () => {
  expect(multiply(2, 12)).toBe(24);
})

test('subtract 10 - 2 to equal 8', () => {
  expect(subtract(10, 2)).toBe(8);
})

test('divide 10 / 2 to equal 5', () => {
  expect(divide(10,2)).toBe(5);
})
test('object assignment', () => {
  const data = {one: 1};
  data ['two'] = 2;
  expect(data).toEqual({one: 1, two:2});
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

