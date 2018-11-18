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
              <input type="text" placeholder="Driver Name">
          </td>
           <td>
              <button>Show Drivers</button>
          </td>	
      </tr>
    </table>
    <p>
      <span style="color:red">Error: Message will be displayed here if errors occured when getting drivers</span>
    </p>
  </div>
</template>

<script>
</script>

<style>
#InspectDriver {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>
