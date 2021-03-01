import axios from 'axios'
//const axiosInstance = axios.create({ 
    const $http  = axios.create({ 
        headers: {'Content-Type': 'application/json'},
          //baseURL: (process.env.NODE_ENV == 'production') ? 'https://ucaicsl.azurewebsites.net/api' : 'https://localhost:44306//api'
          //baseURL: 'http://localhost:58471/api/' 
          baseURL: 'http://3.123.129.220/api/'
          
      })
      export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      }
      //export { axiosInstance }
      export { $http  }