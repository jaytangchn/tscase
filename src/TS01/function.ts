/**
 * 函数书写
 */
let add: (a: number, b: number) => number = function (base: number, increa: number): number { return base + increa };
/**
 * 类型推断 
 * 赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
 */
let add2: (base: number, increa: number) => number = function (a: number, b: number) { return a + b; }
/**
 * 可选参数和默认参数
 * 可选参数使用?修饰即可 ， 但必须放在最后
 * 设置默认参数后可以传入任意值，且不受位置的限制
 */
function add3(base:number,increa:number,opr?:string):any{
    console.log(opr);
    return base+increa;
}
console.log(add3(1,2));
function add4(base:number,increa:number,opr:string="plus"):any{
    console.log(opr);
    return base+increa;
}
console.log(add3(1,2,undefined));
console.log(add3(1,2,"declan"));