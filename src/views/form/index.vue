<template>
  <div class="form">
    <div>{{$route.query.tab}}</div>
    <div>{{$route.params.tab}}</div>

    <!-- tab -->
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" @change="change">
      <el-radio-button
        :label="item.label"
        v-for="(item, index) in typeList"
        :key="item + index"
        >{{ item.name }}</el-radio-button
      >
    </el-radio-group>
    <component :is="tabPosition" />
  </div>
</template>

<script>
import radio from "./components/radio/index";
import checkbox from "./components/checkbox/index";
import myInput from "./components/input/index";
import mySelect from "./components/select/index";

export default {
  components: {
    radio,
    checkbox,
    myInput,
    mySelect
  },
  data() {
    return {
      tabPosition: "radio",
      typeList: [
        { label: "radio", name: "单选" },
        { label: "checkbox", name: "多选框" },
        { label: "my-Input", name: "输入框" },
        { label: "my-select", name: "选择器" },
      ],
    };
  },
  methods:{
    change(val){
      console.log(val);
      this.$router.push({
        name:'Form',
        query:{
          tab:val
        }
      })
    }
  }
};
</script>

<style></style>
