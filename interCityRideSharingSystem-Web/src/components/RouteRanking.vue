<template>
  <div id="">
    <h2>Ranking View -- Most Popular Routes</h2>
    <table align="center">
     <tr>
          <td>Start Date</td>
          <td>End Date</td>
      </tr>
      <tr>
          <td>
              <input type="text" placeholder="YYYY-MM-DD">
          </td>
          <td>
              <input type="text" placeholder="YYYY-MM-DD">
          </td>
           
           <td>
              <button @click="rankDrivers(newParticipant)">Rank the stops </button>

          </td>
         
      </tr>
    </table>
    </table>
    <table align="center">
  <tr>
      <td>{{participants}}</td>  
  </tr>
   </table>

    <p>
      <span style="color:red"></span>
    </p>
  </div>
</template>

<script src="./thirdRanking.js">
</script>

<style>
#InspectRoutes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>


