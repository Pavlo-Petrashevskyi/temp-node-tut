// modules
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('Pavlo');
sayHi(john);
sayHi(peter);