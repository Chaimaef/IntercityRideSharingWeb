<template>
  <div id="InspectRoutes">
    <h2>Fleet Status View -- Routes </h2>
    <table align="center">
      <tr>
          <td>Name of the stop</td>
          <td>Show All Active Routes</td>
          <td>Show Active Routes with Stop</td>
          <td>Clear</td>
          
      </tr>
      <tr>
          <td>
              <input type="text" v-model="stops" placeholder="Stop Name">
          </td>
           <td>
              <button @click="getAllJourneys">Show All Routes</button>
          </td>
          <td>
              <button @click="getJourneyWithStop(stops)">Show Routes With Stop</button>
          </td>
           <td>
             <button onClick="document.location.reload(true)">Clear</button>
          </td>	
         
      </tr>
    </table>
    <p>
      <span id="error" style="color:red">Error Message will be displayed here if errors occured when getting routes</span>
    </p>
        <table id="response" align="center">

      <thread>
        <tr>
        </tr>
      </thread>
        <tbody>
          <tr v-for="journey in journeys">
            <template v-for="line in journey.split(']')">{{line}}<br></template> 
          </tr>
        </tbody>

<!-- Input field and button should be kept here -->
</table>
  </div>
</template>

<script src="./getjourney.js">
</script>
<style>
#InspectRoutes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>