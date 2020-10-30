<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="log">element-Robben</div>
        <el-menu router>
          <el-submenu
            v-for="(item, index) in menu"
            :index="item.id"
            :key="item + index"
          >
            <template slot="title">
              <i class="el-icon-plus"></i>
              {{ item.title }}
            </template>
            <el-menu-item-group
              v-for="(citem, cindex) in item.submenu"
              :key="citem + cindex"
            >
              <el-menu-item :index="citem.route">{{
                citem.title
              }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>{{ $route.name || 'Element' }}</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: '按钮',
          icon: 'el-icon-plus',
          submenu: [{ title: '按钮1', route: 'button' }],
          id: '1',
        },
        {
          title: '文字链接',
          icon: 'el-icon-plus',
          submenu: [{ title: '文字链接', route: 'link' }],
          id: '2',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;

  .log {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
  }

  /deep/ .el-container {
    height: 100%;
  }

  /deep/ .el-submenu__title {
    text-align: left;
  }
  /deep/.el-menu-item-group__title {
    display: none;
  }
  /deep/ .el-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
