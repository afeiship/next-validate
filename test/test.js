var assert = require('assert');
var nx = require('next-js-core2');
var NxValidator = require('../src/next-Validator');

describe('next/Validator', function () {

  it('nx.Validator isMobile 130 -139', function () {
    assert.ok( NxValidator.isMobile('13907171608') );
    assert.ok( NxValidator.isMobile('13807171608') );
    assert.ok( NxValidator.isMobile('13707171608') );
    assert.ok( NxValidator.isMobile('13607171608') );
    assert.ok( NxValidator.isMobile('13507171608') );
    assert.ok( NxValidator.isMobile('13407171608') );
    assert.ok( NxValidator.isMobile('13307171608') );
    assert.ok( NxValidator.isMobile('13207171608') );
    assert.ok( NxValidator.isMobile('13107171608') );
    assert.ok( NxValidator.isMobile('13007171608') );
  });

});
