// 盘点数据
import request from '@/utils/request'

// 盘点信息表
export function inventoryList(query) {
  return request({
    url: '/inventory/getinventory',
    method: 'get',
    params: query
  })
}
// 获取指定商品最新信息
export function getlatest(goodsCode) {
  // console.log('query', query)
  return request({
    url: '/inventory/getlatest',
    method: 'get',
    params: { goodsCode }
  })
}

// 新增信息
export function insertinventory(data) {
  console.log(data)
  return request({
    url: '/inventory/insertinventory',
    method: 'post',
    data
  })
}
