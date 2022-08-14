/* 寄生组合继承：最完美的继承 */
/* 
    1.解决组合继承两次调用超类构造函数的问题
    2.避免子类原型上添加多余无用的属性
*/

function inheritPrototype(SubType,SuperTYpe){
    // 克隆对象
    const prototype = Object.create(SuperTYpe.prototype)
    // 增强对象
    prototype.constructor = SubType
    // 指定对象
    SubType.prototype = prototype
}

function SuperTYpe(name){
    this.name = name
}

SuperTYpe.prototype.SayName = function(){
    console.log('我是',this.name);
}


function SubType(age,name){
    SuperTYpe.call(this,name)
    this.age = age
}

inheritPrototype(SubType,SuperTYpe)

const sub1 = new SubType(25,'Robben')

console.log(sub1);
console.log(SubType.prototype);

sub1.SayName()


