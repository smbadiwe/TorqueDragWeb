import { $http } from 'boot/axios' 

const state = {
    pipes:[],
    isImportDialogVisible: false,
    pipe: {}
  }

  const getters = {
    pipes(state){
      return state.pipes;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    },
    pipe(state){
      return state.pipe;
    }
}

const mutations = {
  PostPipe(state, payload){
    state.pipe = payload;
  },
  PostPipes(state){
    state.isImportDialogVisible = false;
  },
  GetPipes(state, payload){
    state.pipes = payload;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  }

}

const actions = {
  PostPipes(context, payload)
  {
    state.pipes = [];
    state.pipes = payload.pipes;

    return new Promise((resolve, reject) => {
  

       $http.post('Pipes/PostPipes', payload)
        .then(response => {
            
          context.commit('PostPipes', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostPipes error")
          reject(error)
        })
    })
  },
  PostPipe(context, payload)
  {

    return new Promise((resolve, reject) => {
  

       $http.post('Pipes/PostPipe', payload)
        .then(response => {
            
          context.commit('PostPipe', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostPipe error")
          reject(error)
        })
    })
  },
  GetPipes(context, payload)
  {
    state.pipes = [];

    return new Promise((resolve, reject) => {
  

       $http.post('Pipes/GetPipes', payload)
        .then(response => {
            
          context.commit('GetPipes', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetPipes error")
          reject(error)
        })
    })
  }


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}