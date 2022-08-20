import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: JSON.parse(localStorage.getItem('tableData') || '[]')
  },
  mutations: {
    // 添加人员
    addTableData (state, payload) {
      console.log(payload)
      state.tableData.push(payload)
    },
    editTableData (state, payload) {
      state.tableData.splice(payload.index, 1, payload.peopleData)
    },
    delTableData (state, payload) {
      state.tableData.splice(payload.index, 1)
    },
    // 本地持久化
    saveTableData (state, payload) {
      localStorage.setItem('tableData', JSON.stringify(state.tableData))
    }
  },
  actions: {
    addTableData (context, payload) {
      console.log(payload)
      // 添加人员
      context.commit('addTableData', payload)
      // 本地持久化
      context.commit('saveTableData')
    },
    editTableData (context, payload) {
      // console.log(payload)
      // 添加人员
      // 添加人员
      context.commit('editTableData', payload)
      // 本地持久化
      context.commit('saveTableData')
    },
    delTableData (context, payload) {
      context.commit('delTableData', payload)
      context.commit('saveTableData')
    }
  },
  modules: {
  }
})
