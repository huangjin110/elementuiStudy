<template>
  <div class="link">
    <!-- 文字链接 -->
    <!-- herf是原生属性，跳转会刷新页面，体验不好，不建议用 -->
    <el-link>文字链接</el-link>
    <el-link type="primary" href="button">去button</el-link>
    <el-link type="success" @click.native="$router.push({ path: 'button' })"
      >去button</el-link
    >
    <el-link type="warning">文字链接</el-link>
    <el-link type="danger">文字链接</el-link>

    <!-- 有icon的 hover有下划线效果的时候建议用文字链接，其他情况用button就能满足-->
    <div class="link-btn">
      <el-link> <i class="el-icon-phone-outline"></i> 链接</el-link>
      <el-button icon="el-icon-phone-outline" type="text"> 按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.link {
  /deep/.el-link {
    margin: 0 10px;
  }
  .link-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .el-button {
      padding: 0;
      height: 19px;
      line-height: 19px;
    }
  }
}
</style>
