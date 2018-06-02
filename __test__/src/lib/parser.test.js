'use strict';

let parser = require('../../../src/lib/parser.js');

describe('URL Parser', () => {

  it('requires a req object', () => {
    let req = undefined;
    return parser(req)
      .then( response => false)
      .catch( error => expect(error).toBeDefined());
  });
});