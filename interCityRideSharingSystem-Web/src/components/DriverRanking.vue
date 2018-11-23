<template>
  <div id="DriverRanking">
    <h2>Ranking View -- Top Performing Drivers</h2>
    <table align="center">
      <tr>
          <td>Start Date</td>
          <td>End Date</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="startDate" placeholder="dd-MMM-yyyy-HH:mm:ss">
          </td>
          <td>
              <input type="text" v-model="endDate" placeholder="dd-MMM-yyyy-HH:mm:ss">
          </td> 
           <td>
             <button @click="rankDriversDate(startDate,endDate)">Rank the drivers </button>
          </td>
             <td>
              <button onClick="document.location.reload(true)">Clear</button>
          </td>	
       </tr>
 
      </table>
 
    <p>
      <span id="error" style="color:red">i</span>
    </p>

      <table align="center">

      <thread>
        <tr>
        </tr>
      </thread>
        <tbody>
          <tr v-for="participant in participants">
            <template v-for="line in participant.split('_')">{{line}}<br></template> 
          </tr>
        </tbody>

<!-- Input field and button should be kept here -->
</table>
  </div>
</template>

<script src="./rankingDrivers.js">
</script>

<style>
#InspectRoutes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>



