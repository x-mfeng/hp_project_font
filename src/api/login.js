import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}


export function getInfo(token) {
  return request({
    url: '/user/getInfo',
    method: 'post',
    params: {token}
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}


export function getList(userName,status,pageNum,pageSize) {
  return request({
    url: '/user/getList',
    method: 'post',
    data: {
      userName,
      status,
      pageNum,
      pageSize
    }
  })
}
