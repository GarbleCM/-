import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: JSON.parse(localStorage.getItem('tableData') || '[]')
  },
  mutations: {
    setTableDate (state, payload) {
      // console.log(payload)
      localStorage.setItem('tableData', JSON.stringify(payload))
      state.tableData = JSON.parse(localStorage.getItem('tableData') || '[]')
    },
    // 添加人员
    addTableData (state, payload) {
      // console.log(payload)
      state.tableData.push(payload)
      localStorage.setItem('tableData', JSON.stringify(state.tableData))
      state.tableData = JSON.parse(localStorage.getItem('tableData') || '[]')
    },
    // 修改列表数据
    editTableData (state, payload) {
      state.tableData.splice(payload.index, 1, payload.peopleData)
      localStorage.setItem('tableData', JSON.stringify(state.tableData))
      state.tableData = JSON.parse(localStorage.getItem('tableData') || '[]')
    },
    // 删除列表数据
    delTableData (state, payload) {
      state.tableData.splice(payload.index, 1)
      localStorage.setItem('tableData', JSON.stringify(state.tableData))
      state.tableData = JSON.parse(localStorage.getItem('tableData') || '[]')
    },
    // 批量删除多条数据
    allDelTableData (state, payload) {
      const indArr = payload.map(item => item.ind)
      // console.log(indArr)
      indArr.forEach(item => {
        state.tableData.forEach((val, i) => {
          if (val.ind === item) {
            state.tableData.splice(i, 1)
          }
        })
      })
      localStorage.setItem('tableData', JSON.stringify(state.tableData))
      state.tableData = JSON.parse(localStorage.getItem('tableData') || '[]')
    }
    // 本地持久化
    // saveTableData (state, payload) {
    //   localStorage.setItem('tableData', JSON.stringify(state.tableData))
    // }
  },
  actions: {
    // 添加数据
    addTableData (context, payload) {
      // 添加人员
      context.commit('addTableData', payload)
      // 本地持久化
      // context.commit('saveTableData')
    },
    editTableData (context, payload) {
      console.log(payload)
      // 添加人员
      // 添加人员
      context.commit('editTableData', payload)
      // 本地持久化
      // context.commit('saveTableData')
    },
    delTableData (context, payload) {
      context.commit('delTableData', payload)
      // context.commit('saveTableData')
    }
  },
  modules: {
  }
})
