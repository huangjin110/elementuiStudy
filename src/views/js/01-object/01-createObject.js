//  子面量形式

let obj = {
    name: 'Robben',
    age: 28
}

// 缺点：重复创建相同对象需要写大量相同代码


// 工厂模式 缺点不能识别对象类型
function createObject(name,age) {
    
    const obj = new Object()

    obj.name = name
    
    obj.age = age

    return obj

}

const obj1 = createObject('Robben',24)
console.log(obj1);
console.log(typeof obj1);
console.log( obj1 instanceof Object);


console.log(obj.constructor);


