import request from '@/utils/request'

const UserAPI = {
  // 线索分页查询
  Cluelist(data) {
    return request({
      url: `/logins/login`,
      method: 'post',
      data,
    })
  },
}
export default UserAPI
