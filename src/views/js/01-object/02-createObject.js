// 构造函数模式 
// 优点：可以创建新的对象类型
// 缺点：方法不能复用；全局方法解决复用问题，私密性太差

function Person(name, age) {
    this.name = name
    this.age = age
    // this.sayName = function(){
    //     console.log('我叫',this.name);
    // }

    // 引用全局方法，解决方法重用问题
    this.sayName = sayName
}

const sayName = function () {
    console.log('我叫', this.name);
}

const person1 = new Person('赵云', 26)
const person2 = new Person('马超', 29)
person1.sayName()
person2.sayName()

console.log(person1.sayName === person2.sayName);

console.log(person1.constructor);
