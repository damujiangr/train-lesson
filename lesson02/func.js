// 立即执行函数
// 匿名函数
// TODO 闭包: 内部函数，返回函数
// 闭包的风险：内存泄漏
// 很多的对象创建，或者过多闭包使用
// new产生的对象不被销毁
// 什么时候闭包才被销毁 手动设置null
// 常用场景之一：初始化赋值
// 变量提升：var变量， function
// function 实质 var funcName = function(){}
// 【核心】js 编译原理

var a = 'y';

var result = (function(){
    // console.log(a);
    // var a = 'x';
    var a;
    console.log(a);
    a = 'x';
    return function(){
        return a;
    }
})();

var b = result();
b = null; //操作


foo();

// 闭包形式
function foo(){

    var  a = 1;
    return function(){
        return {
            get: a,
            acc: a+10,
            sub: a--
        }
    }
}

var r = foo()();
r.acc();
r.sub();



foo();


var str = '{"a": "1"}';
var j1 = {"a": "1"};
JSON.parse(str);