<template>
    <!-- 主要注意单选框和单选框组的区别,单选框组可以少绑定事件和数据。当单选项大于一个的时候建议使用 -->
  <div class="radio">
      <!-- 单选和单选框组：非单选框组v-model绑定在每一个el-radio上，单选框组v-model绑定在el-radio-group上面 -->
      <!-- 单选 绑定多个value和多个change事件--> 
      <h4>单选</h4>
      <div class="margin-b10px">
          <el-radio v-model="radio" label="1" @change="change">罗本</el-radio>
          <el-radio v-model="radio" label="2" @change="change">c罗</el-radio>
          <el-radio v-model="radio" label="3" @change="change">梅西</el-radio>
          <el-radio v-model="radio" label="3" disabled @change="change">禁用</el-radio>
      </div>
      <!-- 单选框租 -->
      <h4>单选框</h4>
      <el-radio-group v-model="radioGroup" @change="change">
          <el-radio label="1">荷兰</el-radio>
          <el-radio label="2">葡萄牙</el-radio>
          <el-radio label="3" border>西班牙</el-radio>
      </el-radio-group>
      <!-- 卡片样式/带边框样式 在在el-radio-group设置size属性-->
         <h4>卡片单选框</h4>
      <el-radio-group v-model="radioGroupBtn" @change="change" size="medium">
          <el-radio-button label="1">荷兰</el-radio-button>
          <el-radio-button label="2">葡萄牙</el-radio-button>
          <el-radio-button label="3">西班牙</el-radio-button>
      </el-radio-group>
  </div>
</template>

<script>
export default {
data(){
    return{
        radio:'1',
        radioGroup:'1',
        radioGroupBtn:'1'
    }
},
methods:{
    change(val){
        console.log(val);
    }
},
created(){
    console.log('重新加载');
}
}
</script>

<style lang="scss" scoped>
.radio{
    /deep/.el-radio{
        // width: 66px;
        text-align: left;
    }
}
</style>