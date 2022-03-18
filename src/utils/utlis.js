/**
* @description 容器超出省略，后面跟随需求文本
* @param {String} vueEL 元素ref标识
* @param {Number} rows 省略显示的行数bu
* @param {Number} maxrows 最大显示行数，可以不传
* @param {String} str 元素包含的内容
* @param {String} endstr 超出省略结尾跟随的内容，可以传
*/
export function overTextDom(vueEL, rows, maxrows = null ,str, endstr) {
    console.log('[ this ] >', this)
    let el = vueEL
    if (!endstr) {
        endstr =
            '... <span id="overtext-entend" style="color:#999999">展开全文</span>'
    }
    let computedStyle = document.defaultView.getComputedStyle(el, null)
    el.innerHTML = str
    // 获取css设置的相关属性
    let lineHight = parseInt(computedStyle.lineHeight)
    // 文本省略后容器的高度
    let overHeight = rows * lineHight
    // 展开时的最大高度
    if(maxrows){
        el.style.maxHeight = maxrows * lineHight + 'px'
    }
    // 展示时容器超出影藏可滚动
    el.style.overflow = 'auto'
    el.style.wordBreak = 'break-all'

    let temp = str + endstr
    let isExnd = true
    console.log(el.offsetHeight,overHeight)
    while (el.offsetHeight > overHeight) {
        temp = temp.substring(0, temp.length - endstr.length - 1) + endstr
        el.innerHTML = temp
    }
    isExnd = false
    el.addEventListener('click', (e) => {
        el.innerHTML = temp
        if(e.target.tagName === 'SPAN'){
            if (!isExnd) {
                el.innerHTML = str
            } else {
                el.innerHTML = temp
            }
        }
    })
}