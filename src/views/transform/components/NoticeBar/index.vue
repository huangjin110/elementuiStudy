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
      {{ content || '请输入内容'}}
    </span>
  </div>
</template>

<script>
export default {
  name: "NoticeBar",
  props: {
    speed: {
      type: Number,
      default: 60
    },
    delay: {
      type: Number,
      default: 2
    },
    content: {
      type: String,
      default: ''
    }
  },
  watch: {
    delay(v) {
      this.mydelay = v
    }
  },
  data() {
    return {
      paddingLelf: 0,
      duration: "", //动画时间,
      mydelay: 2
    };
  },
  mounted() {
    /** 
     * 1. speed必须保持不变
     * 2. 重复动画时需要加上父容器的宽度offsetWidth
    */
    const content = document.querySelector(".play");
    const offsetWidth = document.querySelector(".wrap").offsetWidth;
    const contentWidth = content.offsetWidth
    this.duration = contentWidth / this.speed;
    content.addEventListener("animationend", () => {
      // 抛出一个动话重复开始事件
      this.$emit('replay')
      this.paddingLelf = offsetWidth;
      this.duration = (contentWidth + offsetWidth) / this.speed;
      this.mydelay = 0;
      content.classList.remove("play");
      content.classList.add("play-infinite");
    });
  },
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
  animation: out linear;
}
.play {
  animation: y-play linear;
}

.play-infinite {
  animation: y-play-infinite linear infinite both;
}
</style>
