<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-11-13 14:53:26
 * @LastEditTime: 2023-11-14 10:59:19
 * @LastEditors: 振顺
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
