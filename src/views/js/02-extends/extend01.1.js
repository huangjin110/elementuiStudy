// ps: 原型链继承之constructor

function SuperSuperType(type){
    this.type = type
}

SuperSuperType.prototype.showType = function(){
    console.log('我是',this.type);
}

SuperTYpe.prototype = new SuperSuperType('中国人')

function SuperTYpe(name) {
    this.name = name
}

SuperTYpe.prototype.SayName = function(){
    console.log('名字',this.name);
}

function SubType(){

}

// 原型链继承

SubType.prototype = new SuperTYpe('Robben')

// SubType.prototype.constructor = SubType

const sub1 = new SubType()

// console.log(sub1);
// console.log(SubType.prototype);
// console.log(sub1.name);
// console.log(sub1.type);

console.log( sub1 instanceof SubType);




