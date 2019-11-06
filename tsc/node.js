// 变量定义类型：
var kkk = 123;
// 定义任意类型,此时相当于不写类型也是可以的
var kk = "123";
// null undefined 是任意一种类型的子类型，允许被使用
var ok = null;
// 定义函数返回值的类型：
function du() {
    return "123";
}
du();
// 空值 ： 给变量写 viod ，只能赋值为 null 或 undefined
var jk = null;
var lol = undefined;
// var jk: void = 123;  // 直接报错，无法编译
// 定义函数不需要返回值，不允许return 任何东西
function myalert() {
    console.log(123);
}
myalert();
