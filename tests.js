var test = require('tape');
var reducerTest = require('tape-redux').reducerTest
var reducer = require('./reducer')

test('can add to count', reducerTest(
    reducer,
    {count:0},
    function(){return {type: 'ADD_TO_COUNT'}},
    {count:1},
    'add to count should add one'
))




