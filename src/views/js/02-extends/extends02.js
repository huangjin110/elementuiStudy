//  借用构造函数继承
/**
 *  优点：可以解决原型链继承方式引用类型属性不独立的问题
 *  缺点：构造函数里声明的方法不能被复用，浪费性能
 **/ 

function SuperTYpe() {
    this.type = 'super'
    this.colors = ['red', 'greed']
}

function SubType() {
    SuperTYpe.call(this)  // 调用父类,将父类this指向子类。this.type就添加到了子类上面
}

const sub1 = new SubType()
const sub2 = new SubType()
sub1.colors.push('yellow')
console.log(sub1.colors);
console.log(sub2.colors);
console.log(sub2.colors === sub1.colors);




//  借用构造函数继承（传参）

// function SuperTYpe(name) {
//     this.name = name
// }

// function SubType() {
//     SuperTYpe.call(this,'Robben')  // 调用父类,将父类this指向子类。this.type就添加到了子类上面
// }

// const sub = new SubType()
// console.log(sub.name);
