<template>
  <div id="InspectPassenger">
    <h2>Fleet Status View -- Passenger</h2>
    <table align="center">
       <tr>
          <td>John</td>
          <td>All Active Passengers</td>
          <td>Active Passengers With Name</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="newParticipant" placeholder="Passenger Name">
          </td>
           <td>
              <button @click="getParticipant">Show All Passengers</button>
          </td>	
          <td>
              <button @click="createParticipant(newParticipant)">Show Passengers With Name</button>
          </td>	
      </tr>
    </table>
    <p>
      <span id="error" style="color:red">Error Message will be displayed here if errors occured when getting passengers</span>
    </p>
    <table align="center">

      <thread>
        <tr>
        </tr>
      </thread>
        <tbody>
          <tr v-for="participant in participants">
            <template v-for="line in participant.split(']')">{{line}}<br></template> 
          </tr>
        </tbody>

<!-- Input field and button should be kept here -->
</table>
  </div>
</template>

<script src="./getpassenger.js">
</script>

<style>
#InspectPassenger {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>