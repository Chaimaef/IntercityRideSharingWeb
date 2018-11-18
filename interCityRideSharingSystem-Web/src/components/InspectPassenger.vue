<template>
  <div id="InspectPassenger">
    <h2>Fleet Status View -- Passenger</h2>
    <table align="center">
       <tr>
          <td>John</td>
          <td>Active Passengers</td>
      </tr>
      <tr>
          <td>
              <input type="text" placeholder="Passenger Name">
          </td>
           <td>
              <button>Show Passengers</button>
          </td>	
      </tr>
    </table>
    <p>
      <span style="color:red">Message will be displayed here if errors occured when getting passengers</span>
    </p>
  </div>
</template>

<script>
</script>

<style>
#InspectPassenger {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>