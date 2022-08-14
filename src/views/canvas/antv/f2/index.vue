<template>
  <div id="F2">
    <canvas id="myChart" width="400"></canvas>
  </div>
</template>

<script>
import F2 from '@antv/f2';
export default {
  props: {
    subjectId: String,
    type: {
      type: String,
      default: '1'
    }
  },
  created() {
  },

  mounted() {
    this.initAntv()
  },
  methods: {
     initAntv() {
      /* 
          1. F2对象得chart对象，用户实例化一个canvas对象
          2. chart.source( 注入数据 )
          3. chart.几何标记（指定图标类型）
              3.1 
          4. chart.render()绘制
      */
      const data = [
        { genre: '2020-01-01', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
        { genre: 'Sports1', sold: 275 },
        { genre: 'Strategy1', sold: 305 },
        { genre: 'Action1', sold: 1200 },
        { genre: 'Shooter1', sold: 950 },
        { genre: 'Other1', sold: 150 },
        { genre: 'Shooter2', sold: 1900 },
        { genre: 'Other2', sold: 150 },
        { genre: 'Sports2', sold: 275 },
        { genre: 'Strategy2', sold: 405 },
        { genre: 'Action2', sold: 120 },
        { genre: 'Shooter3', sold: 350 },
        { genre: '2020-01-06', sold: 150 }
        // { genre: '45', sold: 1509 },
      ]
      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio, // 指定分辨率
        aria: true,
        appendPadding: 0
        // padding: 80
      })

      /* 
        1. 度量
          1.1 ticKCount: 坐标点的数量
      */
      chart.source(data, {
        sold: {
          tickCount: 5,
          min: 0
        },
        genre: {
          // type:'timeCat',
          tickCount: 2
        }
      })

      /* 
        2.axis: 坐标轴 
          2.1
      */
      // chart.axis(false) //隐藏坐标轴
      chart.axis('sold', false) // 隐藏对应坐标抽
      // chart.axis('sold',{label:{ //修改对应图列的样式
      //   fontWeight:400,
      //   fill:'red'
      // }})
      chart.axis('genre', {
        label: {
          // 修改对应图列的样式
          fontWeight: 400,
          fill: 'blue'
        },
        line: null
      })
      const maxY = Math.max(...data.map(item => item.sold))
      chart.guide().line({
        start: [data[4].genre, data[4].sold],
        end: [data[4].genre, maxY],
        style: {
          stroke: '#F44336',
          lineWidth: 0.5
        }
      })
      chart.guide().line({
        start: [data[12].genre, data[12].sold],
        end: [data[12].genre, maxY],
        style: {
          stroke: '#3A76EF',
          lineWidth: 0.5
        }
      })
      chart.guide().tag({
        position: [data[4].genre, maxY],
        content: '看多',
        background: {
          padding: [4, 4], // tag 内边距，使用同 css 盒模型的 padding
          radius: 2, // tag 圆角
          fill: '#F44336' // tag 背景色
        }, // tag 背景样式
        textStyle: {
          fontSize: 12,
          fill: '#fff'
        }, // tag 文本样式
        side: 0, // 三角标的边长，默认为 4
        offsetX: 32,
        // offsetY: 40,
        withPoint: false
      })
      chart.guide().tag({
        position: [data[12].genre, maxY],
        content: '平仓',
        background: {
          padding: [4, 4],
          radius: 2,
          fill: '#3A76EF'
        }, // tag 背景样式
        textStyle: {
          fontSize: 12,
          fill: '#fff'
        }, // tag 文本样式
        side: 0, // 三角标的边长，默认为 4
        offsetX: 32,
        withPoint: false
      })
      // chart.axis('sold',{grid:null})

      // chart.axis('genre', (text, index, total) => {
      //   alert(2)
      //   const cfg = {
      //   }
      //   alert(text)
      //   if (index === 0) {
      //     cfg.textAlign = 'center'
      //   }
      //   if (index === total - 1) {
      //     cfg.textAlign = 'center'
      //   }
      //   return cfg
      // })
      // Step 2: 载入数据源

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .line()
        .position('genre*sold')
        .color('#3A76EF')
        .size(1)
      chart
        .area()
        .position('genre*sold')
        .color('l(90) 0:#3A76EF 1:#ffffff')
        .shape('smooth')

      // Step 4: 渲染图表
      chart.render()
    },
    initF2(width) {
      const chart = new F2.Chart({
        id: 'trend-price',
        pixelRatio: window.devicePixelRatio,
        aria: true,
        // width: width,
        appendPadding: 0
      })
      let data = [
        {
          close_date: '43434',
          close_price: 9.03,
          publish_status: '0',
          sale_status: '0'
        },
        {
          close_date: '43434',
          close_price: 9.02,
          publish_status: '0',
          sale_status: '0'
        },
        {
          close_date: '43434',
          close_price: 9.02,
          publish_status: '0',
          sale_status: '0'
        },
        {
          close_date: '4343454',
          close_price: 9.03,
          publish_status: '0',
          sale_status: '0'
        },
        {
          close_date: 'fgdf',
          close_price: 9.02,
          publish_status: '1',
          sale_status: '0'
        }
      ]
      chart.source(data, {
        close_date: {
          tickCount: 2,
          range: [0.01, 0.99] // 调整宽度,防止数据少的时候宽度被压缩
        },
        close_price: {
          range: [0, 0.8] // 调整高度，给tag和line留出空间
        }
      })
      // 坐标轴
      chart.axis('close_date', {
        label: (text, index, total) => {
          const cfg = {
            // 修改对应图列的样式
            fontWeight: 400,
            fill: '#999999',
            textAlign: 'end'
          }
          if (index === 0) {
            cfg.textAlign = 'start'
          }
          return cfg
        },
        line: null
      })
      chart.axis('close_price', false)
      console.log('[ this.data2 ]', this.data)
      // 辅助标记
      data.forEach((item, index) => {
        if (item.publish_status == '1' || item.sale_status == '1') {
          chart.guide().line({
            start: [item.close_date, item.close_price],
            end: [item.close_date, 'max'],
            style: {
              stroke:
                item.publish_status == '1'
                  ? this.type == '1'
                    ? '#F44336'
                    : '#20B975'
                  : '#3A76EF',
              lineWidth: 0.5
            }
          })
          chart.guide().tag({
            position: [item.close_date, 'max'],
            content:
              item.sale_status == '1'
                ? '平仓'
                : this.type == '1'
                  ? '看多'
                  : '看空',
            background: {
              padding: [4, 4], // tag 内边距，使用同 css 盒模型的 padding
              radius: 2, // tag 圆角
              fill:
                item.publish_status == '1'
                  ? this.type == '1'
                    ? '#F44336'
                    : '#20B975'
                  : '#3A76EF' // tag 背景色
            }, // tag 背景样式
            textStyle: {
              fontSize: 12,
              fill: '#fff'
            }, // tag 文本样式
            side: 0, // 三角标的边长，默认为 4
            withPoint: false
          })
          chart.guide().point({
            position: [item.close_date, item.close_price],
            style: {
              fill:
                item.publish_status == '1'
                  ? this.type == '1'
                    ? '#F44336'
                    : '#20B975'
                  : '#3A76EF', // 点的填充颜色
              stroke:
                item.publish_status == '1'
                  ? this.type == '1'
                    ? '#F44336'
                    : '#20B975'
                  : '#3A76EF',
              lineWidth: 0.1
            }
          })
        }
      })
      chart
        .line()
        .position('close_date*close_price')
        .color('#3A76EF')
        .size(1)
      chart
        .area()
        .position('close_date*close_price')
        .color('l(90) 0:#447EFE 1:#ffffff')
      chart.render()
    },
  }
}
</script>

<style lang="scss" scoped>
#F2 {
  width: 400px;
  height: 260px;
  background: #ffffff;
}
</style>