function printLabel(printObj:{label:string}){
    console.log(printObj.label);
}

let obj = {name:"ts",label:"js"};

printLabel(obj);

/*=======================接口代码=================================== */
/**
 * 属性和类型必须对应才可以
 */
interface printObjInterface{
    label:string;
}
function printLabel2(printObj:printObjInterface){
    console.log(printObj.label);
}
printLabel2(obj);
/**
 * 只读属性  一旦赋值再也无法修改
 * readonly 和 const , 当作为变量时, 使用const,作为属性时使用readonly
 */
interface obj2{
    readonly x:number;
    readonly y:number;
}
let point:obj2={x:2,y:4};
//point.x = 3;  error
let a:ReadonlyArray<any> = [1,2,3];  //只读array ,set ,map都是赋值后无法修改的. 
//但可以用断言重写
let b = a as number[];
/**
 * 额外的属性检查
 * 绕开这些检查非常简单。 最简便的方法是使用类型断言：sq
 * 
 * 最佳的方式是能够添加一个字符串索引签名:sq2
 * 
 * 最后就是将这个对象赋值给一个另一个变量： 因为 sq3不会经过额外属性检查
 */
interface square{
    high ?:number;
    width ?:number;
}
function getArea(ele:square):{area:number,color:string}{
    console.log(ele);
    return {area:23,color:"yellow"};
}
function getArea2(ele:square2):{area:number,color:string}{
    console.log(ele);
    return {area:23,color:"yellow"};
}
//断言
let sq = getArea({area:23} as square);
//字符串索引签名 
interface square2 extends square{
    [propName:string]:any;
}
let sq2 = getArea2({color:"ss",high:45})
//赋给其他变量,一样可以绕过额外类型检查
let sq3 = { colour: "red", width: 100 };
let mySquare = getArea(sq3);

/**
 * 函数类型
 * 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 */
interface SearchFun{
    (name:string):string;
}
let searchFun:SearchFun = function(name:string):string{
    return name;
}

/**
 * 可索引的类型:字符串和数字
 * 描述那些能够“通过索引得到”的类型
 * 比如a[10]或ageMap["daniel"]
 * 字符串索引见上
 */
interface StringArray{
    [index:number] :string;
}
let strings :StringArray = ["bob","declan"];
console.log(strings[0]);
/**
 * 接口可以继承多个接口
 */
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
/**
 * 混合类型
 * 接口描述多种类型
 */
interface Machine{
    price:number;
    start():void;
    (name:string):string;
}
function getMachine():Machine{
    let machine = <Machine>function(name:string){};
    machine.start = function(){};
    machine.price = 23;
    return machine;
}
let ma = getMachine();
ma("12");
ma.start();
ma.price=128;
console.log(ma);
/**
 * 接口可以继承类,但这个接口类型只能被类的子类或其自身继承.
 */