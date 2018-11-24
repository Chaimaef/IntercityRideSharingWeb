import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
  
  export default {
    name: 'PassengerRanking',
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
            console.log(errorMsg)
          });
      }, 
      //method to get journeys in between the input start and end date in the name fields
      //  from the database using the controller from the backend in descending order of ranks
      methods: {
        rankStops: function (startDate, endDate) {
		 if (startDate.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 			  
            //console.log("Cannot process the request because a whitespace exists")
          }
		  if (endDate.indexOf(' ') >= 0){
            var error = document.getElementById("error");
            error.innerHTML ="Cannot process the request because a whitespace exists"; 
            //console.log("Cannot process the request because a whitespace exists")
          }

		else{AXIOS.post(`/rankStops/`+startDate+`/`+endDate, {}, {})
            .then(response => {
              // JSON responses are automatically parsed.
              this.participants.push(response.data)
              this.newParticipant = ''
              this.errorParticipant = ''
            })
            .catch(e => {
              var errorMsg = e.message
              //console.log(errorMsg)
              this.errorParticipant = errorMsg
            });
          }
      }
  }
  }


