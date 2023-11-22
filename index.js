export class Sum {
  constructor(n) {
    this.n = n;
  }

  variableOfController = 0;

  integerDivisibleByThreeFive() {
    if (this.n <= 0) return 'The whole number must be greater than zero';

    for (let i = 0; i < this.n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        this.variableOfController += i;
      }
    }

    return this.variableOfController;
  }
}
