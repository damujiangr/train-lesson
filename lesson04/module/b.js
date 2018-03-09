import { counter, incCounter } from './a';

console.log(counter); // 3

incCounter();

console.log(counter); // 4



var count = require('./a');

// 修改之后数据不变

var count = 3;

incCounter();

count//3