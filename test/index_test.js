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
  
}); 