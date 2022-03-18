<template>
  <!-- 通知，广告，无限循环滚动 -->
  <div
    class="wrap wrap-out"
    :style="{
      'animation-duration': duration + 's',
      'animation-delay': mydelay + 's',
    }"
  >
    <span
      class="content play"
      :style="{
        'padding-left': paddingLelf + 'px',
        'animation-duration': duration + 's',
        'animation-delay': mydelay + 's',
      }"
    >
      {{ content || "请输入内容" }}
    </span>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref, toRefs, watch } from 'vue';
export default {
  name: "NoticeBar",
  props: {
    speed: {
      type: Number,
      default: 60
    },
    delay: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup(props) {

    let duration = ref(0) //动画时间,
    let paddingLelf = ref(0)
    let { speed, content } = props
    let mydelay = ref(0)

    const  install = getCurrentInstance()
    const transform = () => {
      /** 
        * 1. speed必须保持不变
        * 2. 重复动画时需要加上父容器的宽度offsetWidth
       */
      const contentEL = document.querySelector(".play");
      const offsetWidth = document.querySelector(".wrap").offsetWidth;
      const contentWidth = contentEL.offsetWidth
      duration.value = contentWidth / speed;
      contentEL.addEventListener("animationend", () => {
        // 抛出一个动话重复开始事件
        // install.emit('replay')
        paddingLelf.value = offsetWidth;
        duration.value = (contentWidth + offsetWidth) / speed;
        mydelay.value = 0;
        contentEL.classList.remove("play");
        contentEL.classList.add("play-infinite");
      });

    }

    onMounted(transform)

    watch(() => props.delay, (newVal, oldVal) => {
      mydelay.value = newVal
    }, { immediate: true })
    return {
      duration,
      content,
      mydelay,
      paddingLelf
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes y-play {
  from {
    transform: translate3d(0%, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes y-play-infinite {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes out {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.wrap {
  height: 26px;
  width: 100%;
  overflow: hidden;
  .content {
    display: inline-block;
    white-space: nowrap;
  }
}
.wrap-out {
  // animation: out linear;
}
.play {
  animation: y-play linear;
}

.play-infinite {
  animation: y-play-infinite linear infinite both;
}
</style>
