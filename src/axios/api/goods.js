import request from '../fetch'

/**
 * 商品详情
 **/
export function goodsList(sale_id) {
  return request({
    url: '/sale/detail',
    method: 'get',
    params: { sale_id }
  })
}
