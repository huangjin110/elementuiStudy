<template>
  <!-- 模拟输入框 
      1. 容器
      2. 内容 
      3. 光标
    -->
  <input type="text" v-model="text" />
  <div ref="vinput" class="v-input">
    <div class="v-text" @click="handleCliekText" :contenteditable="true">
      {{ vtext }}
    </div>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance, onUpdated } from 'vue'
export default {
  computed: {
    data(){
      text:'4343'
    },
    vtext: {
      get() {
        return this.text
      },
      set(v) {
        this.text = v
      }
    }
  },
  // setup(prop) {
  //   //文本
  //   let text = ref('的说法就开始大黄蜂就')
  //   //文本高度
  //   let textHeight = ref('0px')

  //   onMounted(() => {
  //     const { refs } = getCurrentInstance()
  //     const vinput = refs['vinput'].querySelector('.v-text')
  //     textHeight.value = vinput.offsetHeight + 'px'
  //     console.log('[ text ] >', textHeight)
  //   })

  //   const handleCliekText = () => {

  //   }


  //   return {
  //     text,
  //     textHeight,
  //     handleCliekText
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@keyframes twinkle {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.v-input {
  background: #ffffff;
  display: inline-block;
  padding: 6px 12px;
  .v-text {
    position: relative;
    display: inline-block;
    font-size: 16px;
    width: 20px;
  }
  .v-text:focus-visible {
    outline: none;
  }
}
</style>