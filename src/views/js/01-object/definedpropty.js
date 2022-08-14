
let obj = {
    name:'Robben'
}

/**
 *  使用defineProperty 
 *  没有显示设置writable: , enumerable: , configurable 这些特性时, 默认值都为false 
 */
Object.defineProperty(obj,'age',{
    value: 24
})

const descriptor = Object.getOwnPropertyDescriptor(obj,'name')
const descriptor1 = Object.getOwnPropertyDescriptor(obj,'age')


console.log(descriptor);
console.log(descriptor1);
