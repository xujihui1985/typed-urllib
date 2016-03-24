import isCallable = require('is-callable');
import urllib = require('urllib');
import test = require('blue-tape');
import onchange = require('onchange');

test('exists', (t)=>{
  t.true(isCallable(urllib.create), 'create is callable');
  t.true(isCallable(urllib.request), 'request is callable');
  t.true(isCallable(urllib.request), 'request is callable');
  t.end();
})


