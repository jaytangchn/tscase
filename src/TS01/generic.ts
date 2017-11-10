/**
 * 泛型
 * 如果使用any,会丢失一些信息
 */
function identity<T>(args:T): T{
    console.log(typeof args);
    return args;
}
let ab = identity<number>(2);
/**
 * 泛型类
 * 类的静态属性不能使用这个泛型类型
 */
class box<T>{
    materies:T;
    num:number;
    tell:(x:T) => T;
}
let ac = new box<string>();
ac.materies = "st";
ac.tell = function(x:string){
    return x;
}
ac.num = 12;
let ad = new box();
ad.materies = "oi";
console.log(typeof ad.materies);
/**
 * 泛型约束
 * 比如限制必须有length属性
 */
interface Lengthwise{
    length:number;
}
function getshape<T extends Lengthwise>(args:T):T{
    console.log(args.length);
    return args;
}
getshape([1,2]);