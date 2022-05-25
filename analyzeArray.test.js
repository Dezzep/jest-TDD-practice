import {analyzeArray, average, min, max, len} from './analyzeArray';

test('expect function to exist', () => {
  expect(analyzeArray).toBeDefined();
  expect(average).toBeDefined();
  expect(min).toBeDefined();
  expect(max).toBeDefined();
  expect(len).toBeDefined();
})

test('average should equal 10', () => {
  expect(average([0, 10, 20, 30, 40, 50, 60,])).toBe(30);
})

test('expect minimum to be -6', () => {
  expect(min([-5, -1, -6, 10, 55, 1020])).toBe(-6);
})

test('expect maximum to be 92', () => {
  expect(max([-100, 0, 0, 92, 91, 5])).toBe(92);
})

test('expect len to be 5', () => {
  expect(len([0, -2, 3, 5, 10])).toBe(5);
})

test('analyzeArrayShouldHave4Keys', () => {
  const objectTest = analyzeArray([5,10,15]);
  expect(objectTest.average).toBe(10);
  expect(objectTest.min).toBe(5);
  expect(objectTest.max).toBe(15);
  expect(objectTest.len).toBe(3);
})