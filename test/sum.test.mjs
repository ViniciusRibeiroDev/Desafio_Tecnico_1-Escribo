import { toEqual } from './utils.js';
import { Sum } from '../index.js';

class Test {
  expect;
  message;
  value;
  totalTest = 0;
  testPassed = 0;

  test_with_value_integer() {
    this.value = 10;

    const test1 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 23;
    this.message = `Expect: ${this.expect}, result: ${test1}`;

    const result1 = `${toEqual(
      this.expect,
      test1,
      this.message
    )}. valor passado: ${this.value}, return ${test1}`;

    if (result1.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    this.value = 11;

    const test2 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 33;
    this.message = `Expect: ${this.expect}, result: ${test2}`;

    const result2 = `${toEqual(
      this.expect,
      test2,
      this.message
    )}. valor passado: ${this.value}, return ${test2}`;

    if (result2.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    this.value = 15;

    const test3 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 45;
    this.message = `Expect: ${this.expect} != result: ${test3}`;

    const result3 = `${toEqual(
      this.expect,
      test3,
      this.message
    )}. valor passado: ${this.value}, return ${test3}`;

    if (result3.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    return `-------------> Números Inteiros <-------------
    
${result1}
${result2}
${result3}
`;
  }

  test_with_value_negative() {
    this.value = -10;

    const test1 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 'The whole number must be greater than zero';
    this.message = `Expect: ${this.expect} != result: ${test1}`;

    const result1 = `${toEqual(
      this.expect,
      test1,
      this.message
    )}. valor passado: ${this.value}, return ${test1}`;

    if (result1.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    this.value = -11;

    const test2 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 'The whole number must be greater than zero';
    this.message = `Expect: ${this.expect} != result: ${test2}`;

    const result2 = `${toEqual(
      this.expect,
      test2,
      this.message
    )}. valor passado: ${this.value}, return ${test2}`;

    if (result2.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    this.value = -15;

    const test3 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 'The whole number must be greater than zero';
    this.message = `Expect: ${this.expect} != result: ${test3}`;

    const result3 = `${toEqual(
      this.expect,
      test3,
      this.message
    )}. valor passado: ${this.value}, return ${test3}`;

    if (result3.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    return `-------------> Números Negativos <-------------

${result1}
${result2}
${result3}
`;
  }

  test_with_value_toEqual_zero() {
    this.value = 0;

    const test1 = new Sum(this.value).integerDivisibleByThreeFive();

    this.expect = 'The whole number must be greater than zero';
    this.message = `Expect: ${this.expect} != result: ${test1}`;

    const result1 = `${toEqual(
      this.expect,
      test1,
      this.message
    )}. valor passado: ${this.value}, return ${test1}`;

    if (result1.split('.')[0] === 'Test passed') this.testPassed += 1;

    this.totalTest++;

    return `-------------> Número Igual a Zero <-------------
    
${result1}
`;
  }

  result_test() {
    return `Tests ${this.testPassed}/${this.totalTest}.`;
  }
}

const newTest = new Test();

const testNumberInteger = newTest.test_with_value_integer();
const testNumberNegative = newTest.test_with_value_negative();
const testNumberToEqualZero = newTest.test_with_value_toEqual_zero();
const testResult = newTest.result_test();

console.log(testNumberInteger);
console.log(testNumberNegative);
console.log(testNumberToEqualZero);
console.log(testResult);
