// 对象的类型 ---- 接口
interface Person{   // 相当于对 son 对象的 属性的类型 进行约束； name 和 age 都是不可少或多的 ；
    name: string;
    age: number
}

let son : Person = {
    name:"guanzejian",
    age: 18  // 这里 如果18 写的不是number 类型就会报错；
};


// 二, 可选属性
interface Person2{   // 若希望 某一个属性 可选 可以这样写  age? : number
    name: string;
    age ? : number
}

let fat : Person2 = {
    name:"1221",   // 此时age 就可以不写了。， 但还是不能多写属性
    age: 123,
    // klk: 1223  // 此处Person2 中并未定义，相当于 多余的不能生效。
}

// 三、 任意属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person3{
    name: string;
    age? : string;  // 此时如果给 age 写number 属性就报错了; 因为任意属性的类型 是string。 而age： number 不是string 的子集
    [propName : string]: string;
}

let opp: Person3 = {
    name:"123",
    gane: "13"
}

// 四 、 只读属性
interface Person4{
    readonly id : number;
    name: string;
    age? : number;
}

let opo : Person4 = {
    id: 123,
    name:"kook",
}
// opo.id = 456 //此时 id 为readonly ，无法改写该值；
