<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="log" @click="changeLoge('jjjj')">{{ name }}</div>
        <el-menu style="background: #cccccc" router unique-opened>
          <el-sub-menu
            v-for="(item, index) in menu"
            :index="item.id"
            :key="item + index"
          >
            <template v-slot:title>
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
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>{{ $route.name || "Element" }}</el-header>
        <div>{{ res }}</div>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  // async created() {
  //   const res = await this.axios.get("/xzqh/query", {
  //     params: { fid: 0, key: "c83db9e59f54769da45dde6d4527a6d2" },
  //   });
  //   console.log(res);
  // },
  props: {
    user: {
      type: String,
      default: '111'
    }
  },
  setup(prop, context) {
    const menu = [
      {
        title: "按钮",
        icon: "el-icon-plus",
        submenu: [{ title: "按钮1", route: "/element/button" }],
        id: "1",
      },
      {
        title: "文字链接",
        icon: "el-icon-plus",
        submenu: [{ title: "文字链接", route: "/element/link" }],
        id: "2",
      },
      {
        title: "表单",
        icon: "el-icon-plus",
        submenu: [{ title: "表单", route: "/element/form" }],
        id: "3",
      },
      {
        title: "动画",
        icon: "el-icon-plus",
        submenu: [{ title: "动画", route: "/element/transform" }],
        id: "4",
      },
      {
        title: "css",
        icon: "el-icon-plus",
        submenu: [{ title: "css测试", route: "/element/css" }],
        id: "45",
      },
      {
        title: "canvas",
        icon: "el-icon-plus",
        submenu: [
          { title: "canvas", route: "/element/canvas" },
          { title: "f2测试", route: "/element/f2" }
        ],
        id: "46",
      },
      {
        title: "jsdom",
        icon: "el-icon-plus",
        submenu: [{ title: "js测试", route: "/element/js" }],
        id: "47",
      },
    ]
    const res = ref('res')
    /**
     * 1. setup内用ref创建响应式引用
     * 2. setup内注册狗子函数
     * */
    let name = ref('element-Robben')
    const changeLoge = (param) => {
      name.value = param
    }
    /**
     * 1. return需要暴露给组件其他部分或外部使用的变量或方法
     */
    return {
      changeLoge,
      name,
      menu,
      res
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  background: #cccccc;
  .log {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
  }

  :deep(.el-container) {
    height: 100%;
  }

  :deep(.el-submenu__title) {
    text-align: left;
  }
  :deep(.el-menu-item-group__title) {
    display: none;
  }
  :deep(.el-header) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
