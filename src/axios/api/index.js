import request from '../fetch'

/**
 * 首页列表
 **/
export function indexList() {
  return request({
    url: '/index/index',
    method: 'get',
  })
}
