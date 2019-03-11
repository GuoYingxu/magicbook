import _ from 'lodash'
const state = {
  pics:null,
  json:[],
  pagePicAll:[],
  baseUrl:'',
  currentPage:'main', 
  currentNode:null,
  currentIndex:0,
}

const mutations = {
  GET_PICS (state,value) {
    state.json = value.data
    state.baseUrl = value.base
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  SET_CURRENT_INDEX(state,value){
    state.currentIndex =value
  },
  SET_CURRENT_ALL(state,value){
    state.pagePicAll = value
    
  },
  SET_CURRENT_NODE(state,value){
    state.currentNode = value
  },
  SET_CURRENT_PAGE(state,value){
    state.currentPage = value;
  }
}

const actions = {
  getList ({ commit }) {
    // do something async 
  require('electron').ipcRenderer.send('asynchronous-message', 'ping')

  require('electron').ipcRenderer.on('asynchronous-reply', (event, arg ) => {
      console.log('---------loaded xml')
      commit('GET_PICS',arg)
    })
  }
  
}

export default {
  state,
  mutations,
  actions
}
