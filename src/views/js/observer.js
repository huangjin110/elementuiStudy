class Observer {
    constructor() {
        this.observers = {}
    }

    // 订阅
    $on(name, handler) {
        if (!this.observers[name]) {
            this.observers[name] = []
        }
        this.observers[name].push(handler)
    }

    // 发布
    $emit(name,info) {
        if(!this.observers[name]) return
        for (let i = 0; i < this.observers[name].length; i++) {
            this.observers[name][i](info)
        }

    }

}

let observer = new Observer()
observer.$on('测试', (level)=> { console.log(`测试质量1${level}`) })
observer.$on('测试', (level)=> { console.log(`测试质量2${level}`) })

observer.$emit('测试', '非常好')


// 7.对 x 年 y 月的第 z周，请给出该周的周一至周日的时间。注意：  
// A.周次从周一至  
// B.当天不在本月的， 算入上一月的周次， 例如： 2017 年 2 月 1 日， 算入 2017 年
// 1 月的第 5 周；  
// 举例如下：  
// a. x = 2016,y = 2,z = 1,此时，周一是 2016-02-01， 周日是 2016-02-07；  
// b. x = 2016,y = 3,z = 1,此时，周一是 2016-03-07， 周日是 2016-03-13；  

// function getTime(year, month, week) {

//     let myDate = new Date(`${year}-${month}`)

//     let time = myDate.getTime()

//     // 得到当前时间是这周得第几天
//     let day = myDate.getDay()
//     // 0-6 默认是从周日开始，转化成从周一开始1-7
//     day = day === 0 ? 7 : day5

//     const X = 24 * 60 * 60 * 1000
//     const SEVEN = 7
//     //算出当月第一周周一的时间,由于day是从零点开始算，所以要加一天
//     time = time + (SEVEN - day + 1) * X

//     // 计算传入周周一的时间
//     time = time + (week - 1) * SEVEN * X

//     // 判断当前时间是不是还属于这个月
//     if(time > new Date(`${year}-${month+1}`).getTime()){
//         console.warn( '时间不对' );
//         return
//     }

//     console.log(`周一${new Date(time).toLocaleDateString()}，周日${new Date(time + (SEVEN-1) * X).toLocaleDateString()}`);

// }




// getTime(2022, 6, 2)
// getTime(2022, 6, 3)
// getTime(2022, 6, 4)
// getTime(2022, 6, 5)


