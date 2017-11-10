/**
 * 高级类型
 * 交叉类型
 * 是将多个类型合并为一个类型
 */
class person {
    constructor(public name:string){}
}
interface ConsoleLog{
    println():void;
}
class log {
    info:string = "dddd"
    println():void{};
}
function extend<U,T>(first:U,second:T):U&T{
    let result = <U&T>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}
var jim = extend(new person("xxx"),new log());
console.log(jim.name);
console.log(jim.info);
/**
 * 联合类型
 * 可以返回几种不同类型的数据
 * 其返回的实例只能使用两个类共有的方法和变量
 * 除非使用断言
 */
interface bird{
    fly():void;
    layeggs():void;
}
class birds implements bird{
    fly(){
        console.log("flying")
    }
    layeggs(){
        console.log("lay eggs")
    }
}
interface fish{
    layeggs():void;
    swim():void;
}
class fishes implements fish{
    layeggs(){
        console.log("lay eggs")
    }
    swim(){
        console.log("swimming")
    }
}
function returnValues(animal:string):fish|bird{
    if(animal==="fish"){
        return new fishes();
    }else{
        return new birds();
    }
}
let ming = returnValues("bird");
//只有共有的方法可以被调用
ming.layeggs();
//使用断言可以调用自己特有的方法
if((ming as bird).fly){
    (ming as bird).fly();
}
/**
 * 自定义类型保护
 * 不必频繁地使用断言
 */
function isfish(pet:fish|bird) :pet is fish{
    return (pet as fish).swim !== undefined;
}
if(isfish(ming)){
    ming.swim();
}else{
    ming.fly();
}