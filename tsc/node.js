// 变量定义类型：
var kkk = 123;
// 定义任意类型,此时相当于不写类型也是可以的
var kk = "123";
// null undefined 是任意一种类型的子类型，允许被使用
var ok = null;
// 类型推论： 1、不定义变量类型时，默认会设置一个类型，当突然被改变后，会报错
// 2、若不想有这个推论， 则先不要进行赋值操作（只进行声明操作）
// 1.  eg：
var abc = "status";
// abc = 777;  这样不被允许  
// 2. eg:
var qwe;
qwe = "qwe"; // 这里不会有默认类型的定义；
qwe = 123; // 这里也就不会报类型错误了 
// 多个类型的写法
var asd; // 表示asd 变量可以为 string 或者 number 类型
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
// 多个类型的方法，需要访问共同属性才可以使用：
function guan(somthing) {
    return somthing.toString(); // 此时 
}
guan(123);
var ze = 123;
console.log(ze.length);
