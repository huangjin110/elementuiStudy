// function Person ( name ) {

//     this.name = name

// }

// const person1 = new Person ('Robben')

// const person2 = new Person ( '关羽' )

// console.log('[ person1 === person2 ] >', person1 === person2)



// 静态属性判断是否

function Person(name) {

    if (Person.single) {
        return Person.single
    }

    this.name = name

    Person.single = this

}

const person1 = new Person('Robben')

const person2 = new Person('关羽')

console.log('[ person1 === person2 ] >', person1 === person2)

console.log(person2.name);


const Car = function () {

    let flag = null

    return function (name) {

        if (flag) {

            return flag

        }
        
        flag = this
        
        this.name = name

    }

}()

const car1 = new Car('奔驰')

const car2 = new Car('宝马')


console.log(car1, car2);