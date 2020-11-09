<template>
  <div class="form">
    <!-- tab -->
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button
        :label="item.label"
        v-for="(item, index) in typeList"
        :key="item + index"
      >{{item.name}}</el-radio-button>
    </el-radio-group>
    <component
    :is="tabPosition"
    />
  </div>
</template>

<script>
import radio from './components/radio/index'
import checkbox from './components/checkbox/index'
import myInput from './components/input/index'


export default {
    components:{
        radio,
        checkbox,
        myInput
    },
    data(){
        return{
            tabPosition:'radio',
            typeList:[
                {label:'radio',name:'单选'},
                {label:'checkbox',name:'多选框'},
                {label:'my-Input',name:'输入框'}
            ]
        }
    }
};
</script>

<style></style>
