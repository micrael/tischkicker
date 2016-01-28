var expect = require('expect.js'),
    tischkickerBackend = require('..');

describe('tischkicker-backend', function() {
  it('should say hello', function(done) {
    expect(tischkickerBackend()).to.equal('Hello, world');
    done();
  });
});
