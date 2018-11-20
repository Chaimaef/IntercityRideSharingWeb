<template>
  <div id="InspectRoutes">
    <h2>Fleet Status View -- Routes </h2>
    <table align="center">
      <tr>
          <td>Name of the stop</td>
          <td>Start Time</td>
          <td>Date</td>
          <td>Type of Vechicle</td>
          <td>Number of Seats Available</td>
          <td>Name of the Driver</td>
          <td>Active Routes</td>
      </tr>
      <tr>
          <td>
              <input type="text" placeholder="Stop">
          </td>
          <td>
              <input type="text" placeholder="Start Time">
          </td>
           <td>
              <input type="text" placeholder="YYYY-MM-DD">
          </td>
          <td>
              <input type="text" placeholder="Vehicle type">
          </td>
           <td>
              <input type="text" placeholder="Available Seating">
          </td>
           <td>
              <input type="text" placeholder="Driver Name">
          </td>
           <td>
              <button>Show Routes</button>
          </td>
         
      </tr>
    </table>
    <p>
      <span style="color:red">Error : Message will be displayed here if errors occured when getting routes</span>
    </p>
  </div>
</template>

<script>
</script>

<style>
#InspectRoutes{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>