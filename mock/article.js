const Mock = require('mockjs')

const List = []
const mylist = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
    author: '@string("upper", 8)',
    reviewer: '@first',
    title: '@string("upper", 5)',
    content_short: '@string("upper", 8)',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))

  mylist.push(Mock.mock({
    id: '@increment', // ID
    inventoryCode: '@string("lower", 5)', // 职员编号
    inventoryDate: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'), // 盘点日期
    goodsCode: '@string("upper", 8)', // 商品编号
    goodsName: '@ctitle(3, 5)', // 商品名称
    'type|1': ['CL', 'PA', 'SH', 'SO'],
    inQuantity: '@integer(100, 300)', // 入库数量
    monthBegin: '@integer(100, 300)',
    sales: '@integer(100, 300)',
    back: '@integer(100, 300)',
    monthEnd: '@integer(100, 300)'
  }))
}

module.exports = [
  // mylist
  {
    url: '/vue-element-clothes/inventory/list',
    type: 'get',
    response: config => {
      const { type, goodsName, page = 1, limit = 20, sort } = config.query

      let mockList = mylist.filter(item => {
        // if (goodsName && item.gooodsName !== goodsName) return false
        if (type && item.type !== type) return false
        if (goodsName && item.goodsName.indexOf(goodsName) < 0) return false
        return true
      })

      // 排序
      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

