"use strict";
/**
 * readonly 修饰符 , 只有在构造函数和声明时被初始化
 */
class computer {
    constructor(cpu) {
        this.os = "windows";
        this.cpu = cpu;
    }
}
/**
 * 参数属性
 * 使用 private限定一个参数属性会 声明并初始化  一个私有成员；
 * 对于public和protected来说也是一样。
 */
class animal {
    constructor(color) {
        this.color = color;
    }
}
/**
 * 静态属性
 * 必须用类名点来访问
 */
class phone {
    constructor() {
    }
    get getcpu() {
        return phone.cpu;
    }
    set setcpu(cpuname) {
        phone.cpu = cpuname;
    }
}
phone.cpu = "xiaolong";
let oneplus = new phone();
oneplus.setcpu = "pengpai";
console.log(oneplus.getcpu);
/**
 * 抽象类
 */
class animals {
    voice() {
        console.log("make some noisy");
    }
}
class dog extends animals {
    eat() {
        console.log("eat all");
    }
    voice() {
        console.log("wang wang");
    }
    breath() {
        console.log("breath all the time");
    }
}
// let wangcai = new animals(); 不能直接实例化抽象类
let wangcai = new dog();
wangcai.eat(); //没毛病
wangcai.breath(); //
let laifu; //声明为抽象类型
laifu = new dog();
// laifu.breath()   则调用抽象类中不存在的方法会报错 
