#! /usr/bin/env node

var runner = require( "../dist/runner" ).runner;

runner.execute( ["resolve=.bin/istanbul", "cover", "resolve=mocha/bin/_mocha"] );
