<template>
  <div ref="swiper" class="swiper" :style="{
    width: width ? `${width}px` : 'unset'
  }">
    <div ref="swiperItem" class="swiper-item" :style="{
      transform: `translateX(${translateX}px)`,
      transition: `transform ${duration}ms`,
      left: `-${swiperItemWidth}px`
    }">
      <slot>
        <div v-for="item in 4" :key="item" class="item">
          {{ item }}
        </div>
      </slot>
    </div>
    <!-- button -->
    <div>
      <button @click="change(-1)">上一张</button>
      <button @click="change(1)">下一张</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "vue"

export default {
  props: {
    touch: {
      type: Boolean,
      required: false,
      default: false
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
      type: Number,
      required: false,
      default: 0
    },
    offsetX: {
      type: Number,
      required: false,
      default: 0
    }
  },

  setup(props) {

    const { loop: isloop, offsetX: X, autoplay: isAutoplay, touch: isTouch } = toRefs(props)

    const activeIndex = ref(1)

    const translateX = computed({
      get: () => (activeIndex.value - 1) * offsetx.value * -1 + movex.value,
    })

    const duration = ref(600)

    // 手动设置的偏移量
    const offsetx = computed(() => offsetx.value ? offsetx.value : swiperItemWidth.value)

    const swiperItem = ref()

    const swiper = ref()

    const swiperItemWidth = ref(0)

    let disabled = false

    let childrenlength = null

    // 触摸滑动
    let startx = 0
    let endx = 0
    const movex = ref(0)
    let timer = null
    /**
        * 边界判断
        * 1. 如果不是loop模式
        * 最后一页并且操作是下一页时,阻止操作
        * 第一页并且操作事上一页时,阻止操作 
        * 2. 如果是loop模式
        * 最后一页并且操作是下一页时,进入到假的第一页。设置duration=0，动画完毕后跳到真的第一页
        * 第一页并且操作是上一页时,进入到假的最后一页。设置duration=0，动画完毕后跳到真的最后一页
        **/
    const change = (step) => {
      if (disabled) return
      if (!isloop.value) {
        if (activeIndex.value === 0 && step === -1) return
        if ((activeIndex.value === childrenlength - 1) && step === 1) return
      }
      activeIndex.value += step
      disabled = true
    }

    const copyElement = () => {
      if (!isloop) return
      let children = swiperItem.value.children
      console.log(children.length);
      childrenlength = children.length
      let firstChildElement = children[0]
      let lastChildElement = children[children.length - 1]
      let copyf = firstChildElement.cloneNode(true)
      let copyl = lastChildElement.cloneNode(true)
      swiperItem.value.appendChild(copyf)
      swiperItem.value.insertBefore(copyl, firstChildElement)
    }

    const loop = () => {
      disabled = false
      if (activeIndex.value === 0 || activeIndex.value === childrenlength + 1) {
        duration.value = 0
        activeIndex.value = !activeIndex.value ? childrenlength : 1
        setTimeout(() => {
          duration.value = 600
        })
      }
    }

    const touchMove = (e) => {
      let touch = e.touches[0]
      endx = touch.pageX
      movex.value = endx - startx
    }

    const touchstart = (e) => {
      let touch = e.touches[0]
      startx = touch.pageX
      duration.value = 0
      clearInterval(timer)
    }

    const touchend = (e) => {
      duration.value = 600
      if (Math.abs(movex.value) > swiperItemWidth.value / 2) {
        if (movex.value > 0) {
          change(-1)
        } else {
          change(1)
        }
      }
      movex.value = 0
      // 自动播放
      if (isAutoplay.value) {
        timer = setInterval(() => {
          change(1)
        }, 4000)
      }
    }
    onMounted(() => {
      if (isTouch.value) {
        swiper.value.addEventListener('touchstart', touchstart)
        swiper.value.addEventListener('touchmove', touchMove)
        swiper.value.addEventListener('touchend', touchend)
      }
      copyElement()
      swiperItem.value.addEventListener('transitionend', loop)
      swiperItemWidth.value = swiperItem.value.offsetWidth
      // 自动播放
      if (isAutoplay.value) {
        timer = setInterval(() => {
          change(1)
        }, 4000)
      }
    })

    return {
      activeIndex,
      activeIndex,
      translateX,
      isloop,
      swiperItem,
      duration,
      swiperItemWidth,
      swiper,
      change,
    }
  }

}



</script>

<style lang="scss" scoped>
.swiper {
  overflow: hidden;
}

.swiper-item {
  display: flex;
  width: 100%;
  position: relative;

  div {
    flex-shrink: 0;
    width: 100%;
  }

  .item {
    background: yellowgreen;
    height: 200px;
  }
}
</style>