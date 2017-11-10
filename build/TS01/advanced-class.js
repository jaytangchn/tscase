"use strict";
/**
 * 高级类型
 * 交叉类型
 * 是将多个类型合并为一个类型
 */
class person {
    constructor(name) {
        this.name = name;
    }
}
class log {
    constructor() {
        this.info = "dddd";
    }
    println() { }
    ;
}
function extend(first, second) {
    let result = {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var jim = extend(new person("xxx"), new log());
console.log(jim.name);
console.log(jim.info);
class birds {
    fly() {
        console.log("flying");
    }
    layeggs() {
        console.log("lay eggs");
    }
}
class fishes {
    layeggs() {
        console.log("lay eggs");
    }
    swim() {
        console.log("swimming");
    }
}
function returnValues(animal) {
    if (animal === "fish") {
        return new fishes();
    }
    else {
        return new birds();
    }
}
let ming = returnValues("bird");
//只有共有的方法可以被调用
ming.layeggs();
//使用断言可以调用自己特有的方法
if (ming.fly) {
    ming.fly();
}
/**
 * 自定义类型保护
 * 不必频繁地使用断言
 */
function isfish(pet) {
    return pet.swim !== undefined;
}
if (isfish(ming)) {
    ming.swim();
}
else {
    ming.fly();
}
