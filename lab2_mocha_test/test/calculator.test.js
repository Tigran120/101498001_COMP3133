const { expect } = require('chai');
const calculator = require('../app/calculator');

describe('Calculator', function () {
  describe('add()', function () {
    it('should return 5 when adding 2 and 3', function () {
      expect(calculator.add(2, 3)).to.equal(5);
    });
    it('should return 0 when adding -1 and 1', function () {
      expect(calculator.add(-1, 1)).to.equal(0);
    });
    it('should return -5 when adding -2 and -3', function () {
      expect(calculator.add(-2, -3)).to.equal(-5);
    });
  });

  describe('sub()', function () {
    it('should return 2 when subtracting 5 and 3', function () {
      expect(calculator.sub(5, 3)).to.equal(2);
    });
    it('should return -2 when subtracting 3 and 5', function () {
      expect(calculator.sub(3, 5)).to.equal(-2);
    });
    it('should return 0 when subtracting 5 and 5', function () {
      expect(calculator.sub(5, 5)).to.equal(0);
    });
  });

  describe('mul()', function () {
    it('should return 15 when multiplying 3 and 5', function () {
      expect(calculator.mul(3, 5)).to.equal(15);
    });
    it('should return 0 when multiplying 0 and 5', function () {
      expect(calculator.mul(0, 5)).to.equal(0);
    });
    it('should return -6 when multiplying -2 and 3', function () {
      expect(calculator.mul(-2, 3)).to.equal(-6);
    });
  });

  describe('div()', function () {
    it('should return 2 when dividing 6 by 3', function () {
      expect(calculator.div(6, 3)).to.equal(2);
    });
    it('should return 2.5 when dividing 5 by 2', function () {
      expect(calculator.div(5, 2)).to.equal(2.5);
    });
    it('should return 0 when dividing 0 by 5', function () {
      expect(calculator.div(0, 5)).to.equal(0);
    });
  });
});
