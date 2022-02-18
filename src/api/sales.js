// 销售信息
import request from '@/utils/request'

// 销售数据
export function saleNum(days) {
  return request({
    url: '/sales/salesnum',
    method: 'get',
    params: { days }
  })
}

// 销售信息表
export function salesList(query) {
  return request({
    url: '/sales/getsales',
    method: 'get',
    params: query
  })
}

// 新增信息
export function insertsales(data) {
  return request({
    url: '/sales/insertsales',
    method: 'post',
    data
  })
}
