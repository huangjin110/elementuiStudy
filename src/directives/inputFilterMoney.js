const addEvent = (el, type, fn) => {
  el.addEventListener(type, fn, false);
};

const inputfilter = function(el) {
    addEvent(el,'input',()=>{
        //如果输入非数字，则替换为''
        el.value = el.value.replace(/[^\d\.]/g, '');
        //必须保证第一个为不是零的数字而不是.     
        el.value = el.value.replace(/^\.|^0/g,'');
        //保证只有出现一个.而没有多个.     
        el.value = el.value.replace(/\.{2,}/g,'.');
        //保证.只出现一次，而不能出现两次以上     
        el.value = el.value.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
        //只能输入两位小数
        el.value = el.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
    })
};

export default {
    bind(el){
        if (el.tagName.toLowerCase() !== 'input') {
            el = el.querySelector('input')
        }
        inputfilter(el)
    }
}
