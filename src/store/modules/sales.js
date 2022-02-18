import { saleNum } from '@/api/sales'
const state = {
  saleNum: undefined
}

const mutations = {
  SET_SALENUM: (state, saleNum) => {
    // Object.assign(state, getDefaultState())
    state.saleNum = saleNum
  }
}
const actions = {
  async getSaleNum({ commit }, days) {
    const { data } = await saleNum(days)
    const sumSale = []
    data.forEach((item) => {
      sumSale.push(Number(item.sum))
    })
    if (data.length > 7) {
      sumSale.splice(0, 1)
    }
    commit('SET_SALENUM', sumSale)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
