<template>
  <div id="circle-progress">
    <canvas id="canvas" width="120" height="100"></canvas>
  </div>
</template>

<script>
let ratio = window.devicePixelRatio * 2

export default {

  props: {
    currentRate: {
      type: Number,
      default: 0.8
    },
    speed: {
      type: Number,
      default: 0.02
    },
    maxRadian: {
      type: Number,
      default: 1.5
    }
  },
  computed: {
    percentage() {
      return parseInt(this.defaultRate * 100) + '%'
    }
  },
  data() {
    return {
      defaultRate: 0,
      timer: null
    }
  },
  watch: {
    currentRate(n, o) {
      if (n > 1) {
        this.currentRate = 1
      }
    }
  },


  mounted() {

    let { ctx, canvas } = this.getCavans()
    this.drawText(ctx, canvas)
    this.setTrackValue(ctx, canvas)
    this.drawTrack(ctx, canvas)
    this.fillTrack(ctx, canvas)
    this.transition(ctx, canvas)

  },
  methods: {

    // 获取cavans对象,设置基本属性
    getCavans() {
      let canvas = document.querySelector('#circle-progress>#canvas')
      this.setHd(canvas)
      let ctx = canvas.getContext('2d')
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.save()
      return { ctx, canvas }
    },
    // 高清
    setHd(canvas) {
      let canvasHeight = canvas.height
      let canvasWidth = canvas.width
      // 高清处理
      canvas.style.width = canvasWidth + 'px'
      canvas.style.height = canvasHeight + 'px'

      canvas.width = canvasWidth * ratio
      canvas.height = canvasHeight * ratio
    },
    // 绘制文字
    drawText(ctx) {
      ctx.restore()
      ctx.beginPath()
      ctx.font = `bold ${24 * ratio}px DINAlternate-Bold,DINAlternate`
      ctx.fillStyle = "#E1A97E"
      ctx.textAlign = "center";
      ctx.fillText(this.percentage, 0, 0 + 24 * ratio / 4)
      ctx.save()
    },
    // 和圆弧相关的ctx设置
    setTrackValue(ctx) {
      // 设置偏移，旋转
      // 顺时针旋转135°为基准 ctx.rotate((this.maxRadian) / 2 * Math.PI + (1.5-this.maxRadian/2) * Math.PI)
      ctx.rotate((1.5 - this.maxRadian / 2) * Math.PI)
      ctx.lineCap = "round"
      ctx.lineWidth = 8 * ratio
      ctx.save()
    },
    // 绘制轨道
    drawTrack(ctx) {
      ctx.restore()
      ctx.beginPath()
      ctx.strokeStyle = '#E0E0E0'
      ctx.arc(0, 0, 40 * ratio, 0, this.maxRadian * Math.PI)
      ctx.stroke()
    },
    // 填充轨道
    fillTrack(ctx) {
      let total = this.maxRadian // 最大弧度
      let pi = total * this.defaultRate
      let grd = ctx.createRadialGradient(40 * ratio, 0, 0, 40 * ratio, 0, 120 * ratio)
      ctx.beginPath()
      grd.addColorStop(0, '#F0D4BE');
      grd.addColorStop(1, '#E1A97E')
      ctx.strokeStyle = grd
      ctx.arc(0, 0, 40 * ratio, 0, pi * Math.PI)
      ctx.stroke()
    },
    // 轨道变动
    tracKSprot() {
      this.defaultRate += this.speed
      if (this.defaultRate >= this.currentRate) {
        this.defaultRate = this.defaultRate >= 1 ? 1 : this.defaultRate
        clearInterval(this.timer)
      }
    },
    // 运动
    transition(ctx, canvas) {
      this.timer = setInterval(() => {
        ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
        this.tracKSprot()
        this.drawText(ctx, canvas)
        this.setTrackValue(ctx)
        this.drawTrack(ctx, canvas)
        this.fillTrack(ctx, canvas)
      }, 16)
    }
  }
}
</script>

<style>
</style>