<template>
  <div class="checkbox">
    <!-- 同单选框一样，也有多选框和多选框组,建议使用多选框组更加方便，多选框组绑定的值是一个数组类型，更能反应当前的选项-->
    <!-- 多选框 -->
    <div class="margin-b10px">
      <el-checkbox
        v-model="checked"
        true-label="1"
        false-label="2"
        @change="change"
        >C罗</el-checkbox
      >
      <el-checkbox v-model="checked1" @change="change">梅西</el-checkbox>
    </div>
    <!-- 多选框组 -->
    <div>
      <p>全选按钮</p>
      <el-checkbox
        :indeterminate="indeterminate"
        v-model="isAll"
        @change="handleSelectAll"
        class="all"
        >全选</el-checkbox
      >

      <el-checkbox-group v-model="checkList" @change="handleSelectSingle">
        <!-- el-checkbox label属性只有在使用多选框组的时候有用效 -->
        <el-checkbox label="1" checked>C罗</el-checkbox>
        <el-checkbox label="2">梅西</el-checkbox>
      </el-checkbox-group>
    </div>

    <div>
      <p>限制选择个数</p>
      <el-checkbox-group
        v-model="checkListNumber"
        @change="change"
        min="1"
        max="3"
      >
        <!-- el-checkbox label属性只有在使用多选框组的时候有用效 -->
        <el-checkbox label="1">C罗</el-checkbox>
        <el-checkbox label="2">梅西</el-checkbox>
        <el-checkbox label="3">罗本</el-checkbox>
        <el-checkbox label="4">范佩西</el-checkbox>
      </el-checkbox-group>
    </div>
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
      isAll: false, //标志是否全选
      checkListNumber: [],
    }
  },
  methods: {
    change(val) {
      console.log(val)
      this.indeterminate = !val
    },
    // 点击全选按钮
    handleSelectAll(val) {
      console.log('val', val)

      this.checkList = val ? ['1', '2'] : []
      this.indeterminate = false
    },
    // 点击选中某一个
    handleSelectSingle(val) {
      let count = val.length
      this.isAll = count === ['1', '2'].length
      this.indeterminate = count > 0 && count < ['1', '2'].length
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox {
  .all {
    margin: 0 79px 10px 0;
  }
}
</style>
