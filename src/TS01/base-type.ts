/**
 * 模版字符串
 * 
 * 它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），
 * 并且以${ expr }这种形式嵌入表达式
 */
let years = 2016;
let say : string = `明年是${years+1}年`;
console.log(say);
/**
 * 元组
 * 
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 * 当访问一个越界的元素，会使用联合类型替代：如果不是已经声明的类型会报错
 */
let x :[string,number];
x=["x",2];
x[4]="y";
console.log(x);

/**
 * 枚举
 * 如果有相同的值,返回最后一个
 */
enum Color {RED=1,GREEN,BLACK=1};
let c:Color = Color.RED; 
let colorName : string = Color[1];
console.log(c,colorName);
/**
 * 还有any , null, undefined , void, never 等类型
 */

 /**
  *类型断言
  *类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
  *类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
  * 断言有两种
  */
  let assert : any = "string";
  let length1 : number = (assert as string).length;
  let length2 : number = (<string>assert).length;