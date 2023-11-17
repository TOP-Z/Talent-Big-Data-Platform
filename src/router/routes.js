/*
 * @Description:
 * @Author: 振顺
 * @Date: 2023-10-13 10:05:09
 * @LastEditTime: 2023-11-14 10:54:33
 * @LastEditors: 振顺
 */
// 对外暴露配置路由(常量路由)
export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true, // 是否隐藏路由
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '',
      hidden: false,
      icon: 'HomeFilled',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'DataLine',
    },
  },
]
