'use strict';

const router = require('../../../src/lib/router.js');

describe('Router', () => {

  it('Registers routes of many types', () => {
    router.get('/', () => true);
    router.put('/', () => true);
    router.post('/', () => true);
    router.patch('/', () => true);
    router.delete('/', () => true);
    expect(router.routes.GET['/']).toBeDefined();
    expect(router.routes.PUT['/']).toBeDefined();
    expect(router.routes.POST['/']).toBeDefined();
    expect(router.routes.PATCH['/']).toBeDefined();
    expect(router.routes.DELETE['/']).toBeDefined(); 
  });

  it('creates multiples paths of one type', () => {
    router.get('/a', () => true);
    router.get('/b', () => true);
    router.get('/c', () => true);
    router.get('/d', () => true);

    expect(router.routes.GET['/a']).toBeDefined();
    expect(router.routes.GET['/b']).toBeDefined();
    expect(router.routes.GET['/c']).toBeDefined();
    expect(router.routes.GET['/d']).toBeDefined();
  });

  it('can route requests', () => {
    router.get('/rtest', () => 'get /rtest');
    let req = {
      method: 'GET',
      url: 'http://localhost:8080/rtest?justin=hasHair'
    }
    let res = {}

    router.route(req,res)
    .then(res => expect(res).toEqual('get /rtest'))
    .catch(err => console.log(err));
  
  });
});