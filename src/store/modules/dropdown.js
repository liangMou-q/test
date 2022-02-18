// import { saleNum } from '@/api/sales'
const state = {
  date: 7,
  labelName: 'first'
}

const mutations = {
  SET_DATE: (state, date) => {
    // Object.assign(state, getDefaultState())
    state.date = date
  },
  SET_LABELNAME: (state, labelName) => {
    state.labelName = labelName
  }
}
// const actions = {
//   async getSaleNum({ commit }, days) {
//     const { data } = await saleNum(days)
//     const sumSale = []
//     data.forEach((item) => {
//       sumSale.push(Number(item.sum))
//     })
//     if (data.length > 7) {
//       sumSale.splice(0, 1)
//     }
//     commit('SET_SALENUM', sumSale)
//   }
// }
export default {
  namespaced: true,
  state,
  mutations
  // actions
}
