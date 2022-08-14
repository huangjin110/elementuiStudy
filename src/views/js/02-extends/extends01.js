// 原型链继承
/**
 * 缺点
 * 1. 超类里面有引用类型的属性，会相符干扰。
 * 2. 不用给超类传递参数 
 *  */ 

function SuperTYpe() {
    this.colors = ['red','green']
}

function SubType() {
    this.name = 'color'
}

SubType.prototype = new SuperTYpe()

const sub1 = new SubType()
const sub2 = new SubType()

sub1.colors.push('blue')
console.log(sub1.colors);
console.log(sub2.colors);

// console.log(sub2.colors === sub1.colors); //true
// console.log(sub2.__proto__);
// console.log(sub1.__proto__ === sub2.__proto__); //true
// console.log(SubType.prototype === sub1.__proto__); //true 
// console.log(SubType.prototype === sub2.__proto__); //true
// console.log(SubType.prototype.colors);
// console.log(sub1.__proto__.colors);
// console.log(SubType.prototype.colors === sub2.__proto__.colors);//true

function Person(name) {
    this.name = name
}

Person.prototype = new Number(2321)
const person1 = new Person('Robben')

console.log('----------person1--------');
console.log(person1.__proto__);
console.log(Person.prototype);
// console.log(Person.prototype === person1); //false
console.log(Person.prototype === person1.__proto__); //false
console.log(person1.age);



// ps 包装类型
console.log('-------------------------');   
console.log(new Number(2321) == 2321);
console.log( typeof new Number(2321));
console.log( typeof 2321);
const number1 = new Number(2321)
console.log(number1 + 1);











