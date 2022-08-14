<template>
  <div class="transform">
    动画
    <div class="cire1" @click="click">1111111</div>
    <!-- <MyToast v-model="isShow"></MyToast> -->

    <!-- 通知，广告，无限循环滚动 -->
    <NoticeBar
      v-show="isShow"
      @replay="handleReplay"
      :content="content"
      :delay="2"
    ></NoticeBar>
    <!-- 镂空文字 -->
    <div class="empty-font">100K豆</div>
    <div class="cire"></div>
    <div class="bg">
      <img width="200px" height="200px" :src="require('@/assets/1.png')" />
      <div class="bg-2"></div>
      <div class="bg-3">fjdkf</div>
    </div>
    <div class="text">
      夫卡是激发空手道解放事件发生纠纷是否健对房价肯定发健康的方的附件打开康是封建时代
    </div>
    <data></data>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import NoticeBar from './components/NoticeBar/index.vue'
import data from './components/vue3Data/index.vue'
import { getCurrentInstance } from 'vue'
// import MyToast from '../../plugins/Toast/index.vue'
export default {
  components: {
    NoticeBar,
    data,
    // MyToast
  },
  setup(prop, context) {
    let isShow = ref(true)
    let content = ref('夫卡是激发空手道解放事件发生纠纷是否健对房价肯定发  type: Number,default: 60')
    const handleReplay = () => {
      this.isShow = false

    }
    const instance = getCurrentInstance()
    const globalProperties = instance.appContext.config.globalProperties

    const click = () => {
      globalProperties.MyToast('请稍后再试')
    }
    return {
      isShow,
      content,
      handleReplay,
      click
    }
  }
};
</script>

<style lang="scss" scoped>
.transform {
  @keyframes waggle {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .cire {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: rgba(78, 255, 47, 0.8);
    animation: 4s waggle ease-in-out infinite;
  }
  .empty-font {
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    font-family: PingFangSC, PingFangSC-Regular;
    // -webkit-text-stroke: 1px #FF9E00;
    text-shadow: #ff9e00 2px 0 0, #ff9e00 0 2px 0, #ff9e00 -2px 0 0,
      #ff9e00 0 -2px 0;
  }
}
.bg {
  position: relative;
  width: 200px;
  img {
    width: 200px;
    height: 200px;
  }
  .bg-2 {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0px;
    background-image: url("../../assets/1.png");
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px);
  }
  .bg-3 {
    position: absolute;
    bottom: 0px;
    color: #ffffff;
    width: 100%;
    height: 50px;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}
.text {
  width: 200px;
  text-align: left;
  background: #ff9e00;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-family: PingFangSC-Regular, PingFang SC;
}
</style>
