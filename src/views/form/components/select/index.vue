<template>
  <div class="select">
    <!-- 选择器类型 1.单选，2.多选 select绑定的数据类型不一样，多选需要绑定数组-->
    <!-- 1.基础用法，2.可搜索，3.自定义选项模板（分组），4.可创建条目 -->

    <!-- 单选 -->
    <h5>单选</h5>
    <el-select v-model="value" placeholder="请选择" clearable @change="change">
      <el-option
        v-for="(item, index) in options"
        :label="item.label"
        :value="item.value"
        :key="index"
      >
      </el-option>
    </el-select>

    <!-- 多选 -->
    <h5>多选</h5>
    <el-select
      v-model="multiple"
      placeholder="请选择"
      multiple
      clearable
      @change="change"
    >
      <el-option
        v-for="(item, index) in options"
        :label="item.label"
        :value="item.value"
        :key="index"
      >
      </el-option>
    </el-select>

    <!-- 搜索 -->
    <h5>搜索</h5>
    <el-select
      v-model="multiple"
      placeholder="请选择"
      multiple
      clearable
      filterable
      @change="change"
    >
      <el-option
        v-for="(item, index) in options"
        :label="item.label"
        :value="item.value"
        :key="index"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      multiple: [],
      options: [
        { label: "蛋糕", value: 1 },
        { label: "双皮奶", value: 2 },
        { label: "烧仙草", value: 3 },
        { label: "果茶", value: 4 },
      ],
    };
  },
  methods: {
    change(val) {
      console.log(val);
      console.log(this.multiple);
    },
  },
};
</script>

<style></style>
