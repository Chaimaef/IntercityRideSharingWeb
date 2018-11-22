<template>
  <div id="InspectDriver">
    <h2>Fleet Status View -- Driver</h2>
    <table align="center">
      <tr>
          <td>John</td>
          <td>All Active Drivers</td>
          <td>Active Drivers With Name</td>
          <td>Clear</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="name" placeholder="Driver Name">
          </td>
           <td>
              <button @click="getAllDriver">Show Drivers</button>
          </td>	
           <td>
              <button @click="getDriverWithName(name)">Show Drivers with Name</button>
          </td>	
           <td>
              <button onClick="document.location.reload(true)">Clear</button>
          </td>	
      </tr>
    </table>
    <p>
      <span id="error" style="color:red"> Error Message will be displayed here if errors occured when getting drivers</span>
    </p>
    <table id="response" align="center">

      <thread>
        <tr>
        </tr>
      </thread>
        <tbody>
          <tr v-for="driver in drivers">
            <template v-for="line in driver.split(']')">{{line}}<br></template> 
          </tr>
        </tbody>

<!-- Input field and button should be kept here -->
</table>
  </div>
</template>

<script src="./getdriver.js">
</script>

<style>
#InspectDriver {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>
