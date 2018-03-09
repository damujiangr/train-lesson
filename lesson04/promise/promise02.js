/** 
 * 
 * 参考链接：https://juejin.im/post/597724c26fb9a06bb75260e8
 * one enough: https://www.promisejs.org/
*/


// 立即执行

var p = new Promise(function (resolve, reject) {
    console.log("create a promise");
    resolve("success");
});

console.log("after new Promise");

p.then(function (value) {
    console.log(value);
});

// event loop，与位置无关
setTimeout(() => {
    console.log('timeout');
}, 0);


// Promise 三种状态
// pending，resolved，rejected
var p1 = new Promise(function (resolve, reject) {
    resolve(1);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    }, 500);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(3);
    }, 500);
});

console.log(p1);
console.log(p2);
console.log(p3);
setTimeout(function () {
    console.log(p2);
}, 1000);
setTimeout(function () {
    console.log(p3);
}, 1000);

p1.then(function (value) {
    console.log(value);
});
p2.then(function (value) {
    console.log(value);
});
p3.catch(function (err) {
    console.log(err);
});


// Promise 状态的不可逆性
var p1 = new Promise(function (resolve, reject) {
    resolve("success1");
    resolve("success2");
});

var p2 = new Promise(function (resolve, reject) {
    resolve("success");
    reject("reject");
});

p1.then(function (value) {
    console.log(value);
});

p2.then(function (value) {
    console.log(value);
});


// 链式调用
//   Promise对象的then方法返回一个新的Promise对象
var p = new Promise(function (resolve, reject) {
    resolve(1);
});
p.then(function (value) {               //第一个then
    console.log(value);
    return value * 2;
}).then(function (value) {              //第二个then
    console.log(value);
}).then(function (value) {              //第三个then
    console.log(value);
    return Promise.resolve('resolve');
}).then(function (value) {              //第四个then
    console.log(value);
    return Promise.reject('reject');
}).then(function (value) {              //第五个then
    console.log('resolve: ' + value);
}, function (err) {
    console.log('reject: ' + err);
})



//   Promise then() 回调异步性
var p = new Promise(function (resolve, reject) {
    resolve("success");
});

p.then(function (value) {
    console.log(value);
});

console.log("which one is called first ?");


//   Promise 中的异常
// 异常一旦得到处理，then返回的后续Promise对象将恢复正常，并会被Promise执行成功的回调函数处理
var p1 = new Promise(function (resolve, reject) {
    foo.bar();
    resolve(1);
});

p1.then(
    function (value) {
        console.log('p1 then value: ' + value);
    },
    function (err) {
        console.log('p1 then err: ' + err);
        // 继续返回
        // return Promise.resolve('222');
    }
).then(
    function (value) {
        console.log('p1 then then value: ' + value);
    },
    function (err) {
        console.log('p1 then then err: ' + err);
    }
);

var p2 = new Promise(function (resolve, reject) {
    resolve(2);
});

p2.then(
    function (value) {
        console.log('p2 then value: ' + value);
        foo.bar();
    },
    function (err) {
        console.log('p2 then err: ' + err);
    }
).then(
    function (value) {
        console.log('p2 then then value: ' + value);
    },
    function (err) {
        console.log('p2 then then err: ' + err);
        return 1;
    }
).then(
    function (value) {
        console.log('p2 then then then value: ' + value);
    },
    function (err) {
        console.log('p2 then then then err: ' + err);
    }
);


