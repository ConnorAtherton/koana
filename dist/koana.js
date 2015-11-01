//
// Koana
//
// Have fun solving problems.

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.set = set;
exports.solution = solution;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

// let's cache all the problems from the current set
var problemCache = {};

//
// Set
//
// == Args
// +name+ - Number. The name of the problem set to solve in this file.
//

function set(name) {}

//
// Solution
//
// == Args
// +id+ - Number. The id of the problem to solve within the current problem set.
// +callback+ - Function. The function to write in order to solve the problem.
//

function solution(id, callback) {}