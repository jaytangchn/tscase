"use strict";
function printLabel(printObj) {
    console.log(printObj.label);
}
let obj = { name: "ts", label: "js" };
printLabel(obj);
function printLabel2(printObj) {
    console.log(printObj.label);
}
printLabel2(obj);
let point = { x: 2, y: 4 };
//point.x = 3;  error
let a = [1, 2, 3]; //只读array ,set ,map都是赋值后无法修改的. 
//但可以用断言重写
let b = a;
function getArea(ele) {
    console.log(ele);
    return { area: 23, color: "yellow" };
}
function getArea2(ele) {
    console.log(ele);
    return { area: 23, color: "yellow" };
}
//断言
let sq = getArea({ area: 23 });
let sq2 = getArea2({ color: "ss", high: 45 });
//赋给其他变量,一样可以绕过额外类型检查
let sq3 = { colour: "red", width: 100 };
let mySquare = getArea(sq3);
let searchFun = function (name) {
    return name;
};
let strings = ["bob", "declan"];
console.log(strings[0]);
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getMachine() {
    let machine = function (name) { };
    machine.start = function () { };
    machine.price = 23;
    return machine;
}
let ma = getMachine();
ma("12");
ma.start();
ma.price = 128;
console.log(ma);
/**
 * 接口可以继承类,但这个接口类型只能被类的子类或其自身继承.
 */ 
