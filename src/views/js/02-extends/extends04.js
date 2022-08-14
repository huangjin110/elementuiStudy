// 寄生式继承

let person = {
    name:'黄进'
}

function createAnother (object){
    // 克隆对象
    const clone = Object.create(object)
    // 增强对象
    clone.sayName = function(){   
        console.log(this.name);
    }
    return clone
}

const clonePerson = createAnother(person)

clonePerson.sayName()

console.log(clonePerson.__proto__);