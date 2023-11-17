/*
 * @Description: 用户小仓库
 * @Author: 振顺
 * @Date: 2023-11-14 09:41:39
 * @LastEditTime: 2023-11-14 17:47:11
 * @LastEditors: 振顺
 */
// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
// 引入路由(常量路由)
import { constantRoutes } from '@/router/routes'
let useUserStore = defineStore('User', {
  state: () => {
    return {
      // token: localStorage.getItem('TOKEN'),// 用户唯一标识
      token: GET_TOKEN(), // 用户唯一标识
      menuRoutes: constantRoutes, // 仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
    }
  },
  actions: {
    // ?用户登录的方法
    async userLogin(data) {
      let result = await reqLogin(data)
      if (result.code === 200) {
        // pinia存储token
        this.token = result.data
        // 本地持久化储存一份
        SET_TOKEN(result.data)
        // 保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    // ?获取用户信息方法
    async userInfo() {
      let result = await reqUserInfo()
      if (result.code === 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        return Promise.reject(result.message)
      }
    },
    // ?退出登录
    async userLogout() {
      // 退出登录请求
      console.log(request)
      let result = await reqLogout()
      if (result.code === 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(result.message)
      }
    },
  },
  getters: {},
})

export default useUserStore
