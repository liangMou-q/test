// 销售信息
import request from '@/utils/request'

export function getStocknum(days) {
  return request({
    url: '/stock/stocknum',
    method: 'get',
    params: { days }
  })
}

// 入库信息表
export function stockList(query) {
  return request({
    url: '/stock/getstock',
    method: 'get',
    params: query
  })
}

// 新增信息
export function insertstock(data) {
  return request({
    url: '/stock/insertstock',
    method: 'post',
    data
  })
}

