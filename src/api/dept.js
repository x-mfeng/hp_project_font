import request from '@/utils/request'

// 查询部门列表
export function listDept(query) {
  return request({
    url: 'dept/getList',
    method: 'post',
    data: query
  })
}

//保存用户列表

export function saveDept(data){
  return request({
    url: 'dept/saveDept',
    method: 'post',
    data: data
  })
}
