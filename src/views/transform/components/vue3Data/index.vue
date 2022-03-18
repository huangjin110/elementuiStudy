<template>
  <div></div>
</template>

<script >
import { reactive } from 'vue'
export default {
  setup() {
    const getReactiveDate = ()=>{
      const data = reactive({
          a: 'ddd',
          b: "2324"
      })
      return data
    }
    return {
      getReactiveDate
    }
  }
}
</script>

<style lang="scss" scoped>
</style>