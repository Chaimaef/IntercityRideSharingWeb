import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
  
  export default {
    name: 'RouteRanking',
    data () {
        return {
          participants: [],
          newParticipant: '',
          errorParticipant: '',
          response: []
        }     
    }, 
    created: function () {
        // Initializing participants from backend
          AXIOS.get(`/rankStops`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.participants = response.data
          })
          .catch(e => {
            this.errorParticipant = e;
          });
      }, 
      methods: {
        rankRoutes: function () {
            AXIOS.post(`/rankStops`, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.participants.push(response.data)
              this.newParticipant = ''
              this.errorParticipant = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorParticipant = errorMsg
            });
          }
      }
  }


