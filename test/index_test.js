const assert = require('assert');
const Rooster = require('../index');

describe('defines a rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
    const expected = 'cock-a-doodle-doo!';
    // Exercise: write to file
   const result = Rooster.announceDawn();

    // Verify: compare file contents to string
   assert.equal(expected, result);

    // Teardown: delete path
  
    });
  });
  describe('timeAtDawn', () => {
    it('returns its arugment as a string', () => {
    // Setup
    const inputNum = 12;
    const expected = '12';
    // Exercise: write to file
   const result = Rooster.timeAtDawn(inputNum);

    // Verify: compare file contents to string
    assert.strictEqual(expected, result);

    // Teardown: delete path
  
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const inputNum = -1;
      //Exercise
      //the next part to verify should throw an error
      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum);
      },
      RangeError);
    });
    it('throws an error if passed a number greater than 23', () => {
      //Setup
      const inputNum = 24;
      //Exercise: next part should throw an error
      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNum);
      },
      RangeError);
    });
  });
}); 