/* jshint mocha: true */
var expect = require('chai').expect;
var compare = require('..');

var fixture = function(basename) {
  return require('./fixtures/' + basename + '.json');
};

describe('compare', function() {
  it('exports a function', function() {
    expect(compare)
      .to.be.a('function');
  });

  it('compares two forms', function() {
    expect(compare({content: ['A']}, {content: ['B']}))
      .to.eql([{
        op: 'replace',
        path: '/content/0',
        value: 'B'
      }]);
  });

  it('compares realistic forms', function() {
    var a = fixture('SAFE-cap');
    var b = fixture('SAFE-cap-discount');
    expect(compare(a, b).length)
      .to.be.greaterThan(5);
  });
});
