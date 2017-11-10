"use strict";
/**
 * 泛型
 * 如果使用any,会丢失一些信息
 */
function identity(args) {
    console.log(typeof args);
    return args;
}
let ab = identity(2);
/**
 * 泛型类
 * 类的静态属性不能使用这个泛型类型
 */
class box {
}
let ac = new box();
ac.materies = "st";
ac.tell = function (x) {
    return x;
};
ac.num = 12;
let ad = new box();
ad.materies = "oi";
console.log(typeof ad.materies);
function getshape(args) {
    console.log(args.length);
    return args;
}
getshape([1, 2]);
