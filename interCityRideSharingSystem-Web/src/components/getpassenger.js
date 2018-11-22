import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

// function ParticipantDto (name) {
//     this.name = name
//     this.events = []
//   }
  
//   function EventDto (name, date, start, end) {
//     this.name = name
//     this.eventDate = date
//     this.startTime = start
//     this.endTime = end
//   }
  
  export default {
    name: 'InspectPassenger',
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
          AXIOS.get(`/passengerg`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.participants = response.data
          })
          .catch(e => {
            this.errorParticipant = e;
          });
      }, 
      methods: {
        createParticipant: function (participantName) {
          if (participantName.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 
            //console.log("Cannot process the request because a whitespace exists")
          }
           else{AXIOS.post(`/passengerg/`+participantName, {}, {})
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
            });}
          }, 
          getParticipant: function () {
            AXIOS.post(`/passengerg/`, {}, {})
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