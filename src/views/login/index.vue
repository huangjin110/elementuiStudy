<template>
  <div class="login" v-loading="loading">
    <el-form class="form" inline>
      <el-form-item label="用户名：">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input show-passowrd v-model="passowrd" />
      </el-form-item>
      <div>
        <el-button size="small" type="primary" @click="login">登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      passowrd: "",
      loading: false,
    };
  },
  methods: {
    login() {
      if (this.name) {
          this.loading = true
          setTimeout(()=>{
              localStorage.setItem("username", this.name);
              this.$message({
                  type:'success',
                  message:'登录成功'
              });
              this.$router.push({
                  path:'/element'
              })
          },1000)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .form {
    width: 400px;

    :deep(.el-form-item__label) {
      width: 100px;
    }
  }
}
</style>
