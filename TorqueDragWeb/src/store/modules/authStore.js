import { $http } from 'boot/axios'

const state =  {

    Loginstatus: false,
    IdentityModel: {},
    user: {},
    administrator: {},
    companyName: "",
    companyId: {},
    isLayout1: false,
    isLayout2: true,
    activeViews: {
      isdefaultviewleft:true,
      isdatum: false,
      iswellpath: false,
      ishole: false,
      istubingstring: false,
      isrig: false,
      isfluids: false,
      issubsurface: false,
      isoperations: false
    }

}

const getters = {
    activeViews(state){
      return state.activeViews;
    },
    Loginstatus(state){
        return state.Loginstatus;
    },
    IdentityModel(state){
        return state.IdentityModel;
    },
    user(state){
        return state.user;
    },
    administrator(state){
        return state.administrator;
    },
    companyName(state){
        return state.companyName;
    },
    companyId(state){
      return state.companyId;
    },
    isLayout1(state){
      return state.isLayout1;
    },
    isLayout2(state){
      return state.isLayout2;
    }
}

const mutations = {
    SetActiveViews(state, payload){
      state.activeViews = payload;
      console.log("activeViews: ", payload);
    },
    Login(state, payload){
        console.log("loginDTO:", payload)
        state.Loginstatus= true;
        state.IdentityModel = payload.identity;
        state.companyName = payload.companyName;
        state.companyId = payload.companyId;
        //state.user = payload.user;
        //state.administrator = payload.administrator;
        
        if(state.IdentityModel.roleName == "admin"){
          this.$router.push('/admin');
        }
        else{
          this.$router.push('/userLayout');
        }
    
        state.visible = false
        state.showSimulatedReturnData = true
        
    },
    Logout(state){
        console.log("logoutUser");
        state.Loginstatus= true;
        state.IdentityModel = {}
        this.$router.push('/');
    },
    showLayout1(state){
      state.isLayout1 = true;
      state.isLayout2 = false;
      this.$router.push('/docksite');
    }

}

const actions = {
    Login(context, payload)
    {
      context.state.visible = true
      context.state.showSimulatedReturnData = false

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('Authentications/Login', payload)
          .then(response => {
              
            context.commit('Login', response.data) 
            context.dispatch('wellDesignStore/GetTorqueDragDesigns',  response.data, {root:true})             
              resolve(response)
              
          })
          .catch(error => {
            console.log("login error")
            state.visible = false
            state.showSimulatedReturnData = true
            alert("UserName or Password does not exist");
            reject(error)
          })
      })
    },
    Logout(context)
    {
      return new Promise((resolve, reject) => {
        console.log("seen")
         $http.post('Authentications/Logout', context.state.IdentityModel)
          .then(response => {
              
            context.commit('Logout', response.data)              
              resolve(response)
              
          })
          .catch(error => {
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