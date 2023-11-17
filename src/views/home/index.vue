<!--
 * @Description: 
 * @Author: 振顺
 * @Date: 2023-11-14 10:42:24
 * @LastEditTime: 2023-11-15 12:01:07
 * @LastEditors: 振顺
-->
<template>
  <div>
    <h1>我是一级路由登录成功后的页面</h1>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import UserAPI from '@/api/user/index.js'
// onMounted(() => {
//   let data = {
//     username: 'admin',
//     password: 'admin123',
//   }
//   let result = UserAPI.Cluelist(data)
//   console.log(result)
// })
</script>
<style scoped lang="scss"></style>
