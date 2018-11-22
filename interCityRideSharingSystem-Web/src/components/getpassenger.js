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
          passengers: [],
          activePassenger: '',
          errorPassenger: '',
          response: []
        }
      
    }, 
    created: function () {
        // Initializing participants from backend
          AXIOS.get(`/passengerg`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.passengers = response.data
          })
          .catch(e => {
            this.errorPassenger = e;
          });
      }, 
      methods: {
        getPassengerWithName: function (passengerName) {
          if (passengerName.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 
            //console.log("Cannot process the request because a whitespace exists")
          }
           else{AXIOS.post(`/passengerg/`+passengerName, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.passengers.push(response.data)
              this.activePassenger = ''
              this.errorPassenger = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorPassenger = errorMsg
            });}
          }, 
          getAllPassenger: function () {
            AXIOS.post(`/passengerg/`, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.passengers.push(response.data)
              this.activePassenger = ''
              this.errorPassenger = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorPassenger = errorMsg
            });
          }

      }
  }