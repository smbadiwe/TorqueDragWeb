import axios from 'axios'
const processEnvNOEENV = "production";
    const $http  = axios.create({ 
        baseURL: (processEnvNOEENV == 'production') ? 'https://sea-turtle-app-sgqll.ondigitalocean.app/' : 'http://localhost:5212/',
        headers: {
          baseURL: (processEnvNOEENV == 'production') ? 'https://sea-turtle-app-sgqll.ondigitalocean.app/' : 'http://localhost:8080/',
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