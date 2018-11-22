<template>
  <div id="DriverRankingi">
    <h2>Ranking View -- Top Performing Drivers</h2>
    <table align="center">
      <tr>
          <td>Start Date</td>
          <td>End Date</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="startDate" placeholder="YYYY-MM-DD">
          </td>
          <td>
              <input type="text" v-model="endDate" placeholder="YYYY-MM-DD">
          </td> 
           <td>
             <button @click="rankDriver(startDate,endDate)">Rank the drivers </button>
          </td>
       </tr>
     </table>
 
  <p>
      <span style="color:red"></span>
    </p>

    <table align="center">
  <tr>
      <td>{{participants}}</td>  
  </tr>
   </table> 
  </div>
</template>

<script src="./firstRanking.js">
</script>

<style>
#InspectRoutes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>


