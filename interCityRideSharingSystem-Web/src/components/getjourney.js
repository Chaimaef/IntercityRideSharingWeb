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
    name: 'InspectRoutes',
    data () {
        return {
          journeys: [],
          activejourney: '',
          errorJourney: '',
          response: []
        }
      
    }, 
    created: function () {
        // Initializing participants from backend
          AXIOS.get(`/journeysg`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.journeys = response.data
          })
          .catch(e => {
            this.errorJourney = e;
          });
      }, 
      methods: {
        getJourneyWithStop: function (stop) {
          if (stop.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 
            //console.log("Cannot process the request because a whitespace exists")
          }
          else {AXIOS.post(`/journeysg/`+stop, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.journeys.push(response.data)
              this.activejourney = ''
              this.errorJourney = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorJourney = errorMsg
            });
          }
          }, 
          getAllJourneys: function () {
            AXIOS.post(`/journeysg/`, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.journeys.push(response.data)
              this.activejourney = ''
              this.errorJourney = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorJourney = errorMsg
            });
          }

      }
  }