import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
  
  export default {
    name: 'InspectDriver',
    data () {
        return {
          drivers: [],
          activeDriver: '',
          errorDriver: '',
          response: []
        }
      
    }, 
    created: function () {
        // Initializing participants from backend
          AXIOS.get(`/driverg`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.drivers = response.data
          })
          .catch(e => {
            this.errorDriver = e;
          });
      }, 
      methods: {
        getDriverWithName: function (driverName) {
          if (driverName.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 
            //console.log("Cannot process the request because a whitespace exists")
          }
          else{  AXIOS.post(`/driverg/`+driverName, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.drivers.push(response.data)
              this.activeDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorDriver = errorMsg
            });}
          }, 
          getAllDriver: function () {
            AXIOS.post(`/driverg/`, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.drivers.push(response.data)
              this.activeDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorDriver = errorMsg
            });
          }

      }
  }