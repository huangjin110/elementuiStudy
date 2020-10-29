<template>
  <div class="btn">
    <!-- el按钮 -->
    <!-- 主题 -->
    <h2>主题和文字按钮都有type属性控制</h2>
    <div>
      <el-button type="primary">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button type="warning">按钮</el-button>
      <el-button type="danger">按钮</el-button>
    </div>
    
    <!-- 类型 -->
    <div >
      <el-button type="text">按钮</el-button>
      <el-button >按钮</el-button>
    </div>

    <h2>按钮大小</h2>
    <div>
      <div>
        <el-button>大 padding:12px 20px font-size:14px</el-button>

      </div>
       <div>
        <el-button size="medium">中等 padding:10px 20px font-size:14px</el-button>
      </div>
       <div>
        <el-button size="small">小的 padding:9px 15px font-size:12px</el-button>
      </div>
       <div>
        <el-button size="mini">迷你 padding:7px 15p font-size:14px</el-button>
      </div>
    </div>

    <h2>形状</h2>
    <el-button>默认</el-button>
    <el-button round>圆角 <i class="el-icon-edit"></i></el-button>
    <el-button circle icon="el-icon-edit"></el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>