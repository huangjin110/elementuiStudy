<template>
  <div class="hx-calender-row">
    <div class="instruct">
      <img
        class="pre"
        src="./icons/left.png"
        alt="pre"
        @click="changeMonth(-1)"
      />
      <div class="time">{{ year }}年{{ month }}月</div>
      <img
        class="next"
        src="./icons/right.png"
        alt="next"
        @click="changeMonth(1)"
      />
    </div>
    <div class="row">
      <div
        v-for="(item, index) in calender"
        :key="index"
        class="date-item"
        :class="{ 'active-item': item.date === date }"
        @click="setTime(item)"
      >
        <div class="week">周{{ item.day }}</div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MONTHNUMBER, WEEK, BIGMONTH } from './config'

const emit = defineEmits(['change'])

/**
 * @description 获取当前年月
 * @returns { Object }
 */
const getNow = () => {
  const now = Date.now()

  const DateNow = new Date(now)

  return {
    year: DateNow.getFullYear(),
    month: DateNow.getMonth() + 1,
    date: DateNow.getDate()
  }
}
/**
 * @description 判断当月天数
 * @param { Number } year 年份
 * @param { Number } month 月份
 * @returns { Number } 天数
 **/
const juageMonthNumber = (year, month) => {
  if (month !== 2) {
    if (BIGMONTH.includes(month)) {
      return MONTHNUMBER.BIG
    } else {
      return MONTHNUMBER.SMALL
    }
  } else {
    if (year % 400 === 0 && year % 100 === 0) {
      return MONTHNUMBER.BIGSEP
    } else {
      if (year % 4 === 0 && year % 100 !== 0) {
        return MONTHNUMBER.BIGSEP
      }
      return MONTHNUMBER.SMALLSEP
    }
  }
}

/**
 * @description 生成日历
 * @param { Number } year 年份
 * @param { Number } month 月份
 * @returns { Number } 天数
 **/
const getCalender = (year, month) => {
  //   1. 获取当前时间 now -> 当前年,月 -> 当前月的第一天
  //   2. 判断当月天数 monthMember
  // 判断月份，如果是2月判断是否是润年，闰年29天，平年28天；否则判断大小月
  //   3. 根据天数monthMember循环添加日期对象 dateArray.push({ date: date.getDate(), day: date.getDay()} )
  //   4. 生成 dateArray = [ {date: date.getDate(), day: date.getDay()} ]

  let monthMember = juageMonthNumber(year, month)

  const date = new Date(`${year}/${month}`)

  const firstDay = date.getDay()

  const firstDate = date.getDate()

  let dateArray = []

  for (let index = 0; index < monthMember; index++) {
    let num = (firstDay + index) % 7
    let obj = { date: firstDate + index, day: WEEK[num] }
    dateArray.push(obj)
  }
  return dateArray
}

const emitEventChange = (year, month, date) => {
  let timestamp = new Date(`${year}/${month}/${date}`).getTime()
  emit('change', {
    year: year.value,
    month: month.value,
    date: nowDate,
    timestamp
  })
}

let year = ref(0)
let month = ref(0)
let date = ref(0)
const calender = ref({})

const { year: nowYear, month: nowMonth, date: nowDate } = getNow()

date.value = nowDate
year.value = nowYear
month.value = nowMonth

calender.value = getCalender(year.value, month.value)

const changeMonth = type => {
  month.value += type
  if (month.value === 13) {
    month.value = 1
    year.value += 1
  } else if (month.value === 0) {
    month.value = 12
    year.value -= 1
  }
  emitEventChange(year.value, month.value, date.value)
  calender.value = getCalender(year.value, month.value)
}

const setTime = item => {
  date.value = item.date
  emitEventChange(year.value, month.value, date.value)
}
</script>

<style lang="scss" scoped>
.hx-calender-row {
  padding: 20px 22px 16px;
  background: #ffffff;
  overflow: auto;
  .instruct {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    .time {
      margin: 0 4px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 16px;
    }
    .pre,
    .next {
      width: 12px;
      height: 12px;
    }
  }
  .row {
    display: flex;
    .date-item {
      padding: 9px 11px 12px;
      flex-shrink: 0;
      border-radius: 4px;
      .week,
      .date {
        text-align: center;
        color: #333333;
      }
      .week {
        margin-bottom: 8px;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
      }
      .date {
        font-size: 16px;
        font-family: DIN-HUAXI, DIN;
      }
    }
    .active-item {
      background: #1677ff;
      .week,
      .date {
        color: #ffffff;
      }
    }
  }
}
</style>
