<template>
  <div id="InspectDriver">
    <h2>Fleet Status View -- Driver</h2>
    <table align="center">
      <tr>
          <td>John</td>
          <td>Active Drivers</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="newParticipant" placeholder="Driver Name">
          </td>
           <td>
              <button @click="createParticipant(newParticipant)">Show Drivers</button>
          </td>	
           <td>
              <button>Clear</button>
          </td>	
      </tr>
    </table>
    <p>
      <span style="color:red">Error: Message will be displayed here if errors occured when getting drivers</span>
    </p>
    <table>
  <tr v-for="participant in participants" >
      <td>{{ participant}}</td>  
  </tr>
<!-- Input field and button should be kept here -->
</table>
  </div>
</template>

<script src="./getuser.js">
</script>

<style>
#InspectDriver {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>
