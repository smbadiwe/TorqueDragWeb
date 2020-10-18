import { $http } from 'boot/axios'

const state =  {

    Loginstatus: false,
    IdentityModel: {},
    user: {},
    administrator: {},
    companyDBConnectionString: ""

}

const getters = {
    
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
    companyDBConnectionString(state){
        return state.companyDBConnectionString;
    }
}

const mutations = {

    Login(state, payload){
        console.log("loginDTO:", payload)
        state.Loginstatus= true;
        state.IdentityModel = payload.identity;
        state.companyDBConnectionString = payload.companyDBConnectionString;
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