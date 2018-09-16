import _ from 'lodash'
const state = {
  pics:[],
  originData:[]
}

const mutations = {
  GET_PICS (state,value) {
    state.originData = value
    state.pics = _.map(value,'pic')
    console.log(value)
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  getList ({ commit }) {
    // do something async 
  require('electron').ipcRenderer.send('asynchronous-message', 'ping')

  require('electron').ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
      commit('GET_PICS',arg)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
