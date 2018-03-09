// 回调地狱
// promise写法

// begin 回调地狱
function a() {
    //do sth ...
    b();
}
function b() {
    //do sth ...
    c();
}
function c() { }

// or
func1(data0, data1 => {
    func2(data2, data3 => {
        func3(data3, data4 => data4)
    })
})
// end --------------------------

// begin promise写法
var p = new Promise((resolve, reject) => {
    console.log('begin');
    resolve(0);
});
p.then((p) => {
    console.log(p);
})
.then((p) => {
    console.log(p);
});

// end --------------------------

