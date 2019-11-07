// 变量定义类型：
var kkk:number = 123;

// 定义任意类型,此时相当于不写类型也是可以的
var kk:any = "123";

// null undefined 是任意一种类型的子类型，允许被使用
var ok:number = null;

// 类型推论： 1、不定义变量类型时，默认会设置一个类型，当突然被改变后，会报错
// 2、若不想有这个推论， 则先不要进行赋值操作（只进行声明操作）
// 1.  eg：
var abc = "status";
// abc = 777;  这样不被允许  
// 2. eg:
var qwe;
qwe = "qwe";  // 这里不会有默认类型的定义；
qwe = 123;  // 这里也就不会报类型错误了 

// 多个类型的写法
let asd: string | number ;  // 表示asd 变量可以为 string 或者 number 类型

// 多个类型写法，也会有默认类型
let  jian: string | number ;
jian = "123";
console.log(jian.length) // 不会报错， 此时还是string 有length 
jian = 7;
// console.log(jian.length) // 报错， number类型 没有length 


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

// 多个类型的方法，需要访问共同属性才可以使用：
function guan(somthing : string | number): string{
    //   return somthing.length  // 此时 number 类型并没有length属性，所以直接报错
    return somthing.toString() // 不管是number 还是 string 类型都可以 toString ，于是就是正确的的
}
guan(123);

