import axios from 'axios'
//const axiosInstance = axios.create({ 
    const $http  = axios.create({ 
      //baseURL: 'http://localhost:58471/api/' ,
      baseURL: 'http://localhost:3000/',
      //baseURL: 'https://learningways.com.ng/api/',
      //withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          //"Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",
          // "Access-Control-Allow-Credentials":true
        }
          
      })
      export default ({ Vue }) => {
        Vue.prototype.$axios = axios
      }

      /* header("Access-Control-Allow-Origin: *");   
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, header1"); */

      export { $http  }