// 变量定义类型：
var kkk:number = 123;

// 定义任意类型,此时相当于不写类型也是可以的
var kk:any = "123";

// null undefined 是任意一种类型的子类型，允许被使用
var ok:number = null;

// 定义函数返回值的类型：
function du():string{
    return "123"
}
du();

// 空值 ： 给变量写 viod ，只能赋值为 null 或 undefined
var jk: void = null;
var lol : void = undefined;
// var jk: void = 123;  // 直接报错，无法编译

// 定义函数不需要返回值，不允许return 任何东西
function myalert():void{
     console.log(123)
}
myalert()

