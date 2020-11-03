<template>
  <div class="checkbox">
    <!-- 同单选框一样，也有多选框和多选框组,建议使用多选框组更加方便，多选框组绑定的值是一个数组类型，更能反应当前的选项-->
    <!-- 多选框 -->
    <div class="margin-b10px">
      <el-checkbox
        :indeterminate="indeterminate"
        v-model="checked"
        true-label="1"
        false-label="2"
        @change="change"
        >C罗</el-checkbox
      >
      <el-checkbox v-model="checked1" @change="change">梅西</el-checkbox>
    </div>
    <!-- 多选框组 -->
    <el-checkbox
      :indeterminate="indeterminate"
      v-model="checked"
      @change="change"
      >全选</el-checkbox
    >

    <el-checkbox-group v-model="checkList" @change="change">
      <!-- el-checkbox label属性只有在使用多选框组的时候有用效 -->
      <el-checkbox label="1" checked>C罗</el-checkbox>
      <el-checkbox label="2">梅西</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: true,
      indeterminate: true,
      checkList: [], //多选框组回显时，绑定数组里的值必须和多选框的label全等。
    };
  },
  methods: {
    change(val) {
      console.log(val);
      this.indeterminate = !val;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
}
</style>
