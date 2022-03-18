### vue 3
1. template 标签上不能适用 slot attribute语法。需要改成v-slot="name"的形式
2. 事件修饰符native被取消
3. 获取当前组件实列 const instance = getCurrentInstance()
    - 获取globalProperties getCurrentInstance().appContext.config.globalProperties
    - 获取refs getCurrentInstance.refs
    - instance.emit() 向父组件派发事件
4. Refs
    - ref() 接收一个参数，创建一个响应式对象。如果传入对象回调用reactive函数处理
    - toRef() 可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
    - toRefs()
### router

1. 
