// 商品信息
import request from '@/utils/request'

// 获取列表
export function goodsList() {
  return request({
    url: '/goods/goodslist',
    method: 'get'
    // params: query
  })
}

// 文件上传
export const upload = (file) => {
  const formData = new FormData()
  formData.append('file', file.raw, file.name)
  return request({
    url: 'upload/uploadimg',
    method: 'post',
    dataType: 'form-data',
    data: formData
  })
}
