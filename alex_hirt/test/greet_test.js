const chai = require('chai');
const expect = chai.expect;
const hello = require(__dirname + '/../lib/greet');

describe('greet function', function() {
  it('should return hello alex', function() {
    expect(hello.greet('alex')).to.eql('hello alex');
  });
});
