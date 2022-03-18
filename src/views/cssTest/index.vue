<template>
  <div class="css">
    <div class="father">
      <div class="child"></div>
    </div>
    <div class="round"></div>
    <div style="height: 200px">
      <div style="height: 400px; text-align: left">
        加分的考生飞机喀什的附件时间疯狂的事福克斯的福克斯的放声大哭飞机喀什地方手打发
      </div>
    </div>
    <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.uc1z.com%2Fwp-content%2Fuploads%2F2019%2F04%2F1553680380_866165.jpg&refer=http%3A%2F%2Fimg.uc1z.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614476665&t=ca6be902385438aa0456bebe9b259b73"
      alt=""
    />
    <div class="bg"></div>
    <div class="bg1"></div>
    <!-- 背景图组合 -->
    <div class="score-warp">
      <div class="top">看多 看空</div>
      <div class="center">11111</div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.css {
  .father {
    // display: flex;
    padding: 50px;
    width: 200px;
    // box-sizing: border-box;
    background: hotpink;
  }
  .child {
    // flex: 1;
    width: 100%;
    height: 20px;
    background: #ffffff;
  }
  .round {
    width: 34px;
    height: 34px;
    background: #ffffff;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
  .bg {
    width: 100%;
    height: 638px;
    background: url("C://Users/47450/Desktop/微信图片_20220314111117.jpg")
      no-repeat;
    background-size: contain;
  }
  .bg1 {
    height: 400px;
    width: 325px;
    background: url("C://Users/47450/Desktop/list_bg1.png") no-repeat;
    background-size: contain;
  }
  .score-warp {
    .top {
      width: 335px;
      height: 50px;
      line-height: 50px;
      background: url("C://Users/47450/Desktop/切图/看多-上2.png") no-repeat;
      background-size: contain;
    }
    .center {
      width: 335px;
      background: url("C://Users/47450/Desktop/切图/看多-中.png");
      background-size: contain;
    }
    .bottom {
      width: 335px;
      height: 8px;
      background: url("C://Users/47450/Desktop/切图/看多-下.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>