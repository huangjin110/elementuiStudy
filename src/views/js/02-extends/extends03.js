// 组合继承：结合原型链继承和构造函数继承的优点

function SuperTYpe(name) {
    this.name = name
}

SuperTYpe.prototype.sayName = function () {
    console.log('我的名字', this.name);
}

function SubType(name, age) {
    SuperTYpe.call(this,name)
    this.age = age
}

SubType.prototype = new SuperTYpe()
// SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function(){
    console.log('年龄',this.age);
}

const sub1 = new SubType('Robben',24)
console.log(sub1);
sub1.sayName()
sub1.sayAge()