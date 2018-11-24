<template>
  <div id="InspectPassenger">
    <h2>Fleet Status View -- Passenger</h2>
    <table align="center">
    <!-- setting up the input text fields -->
       <tr>
          <td>John</td>
          <td>All Active Passengers</td>
          <td>Active Passengers With Name</td>
          <td>Clear</td>
      </tr>
      <tr>
          <td>
              <input type="text" v-model="name" placeholder="Passenger Name">
          </td>
           <td>
              <button @click="getAllPassenger">Show All Passengers</button>
          </td>	
          <td>
              <button @click="getPassengerWithName(name)">Show Passengers With Name</button>
          </td>	
             <td>
              <button onClick="document.location.reload(true)">Clear</button>
          </td>	
      </tr>
    </table>
    <p>
      <span id="error" style="color:red">Error Message will be displayed here if errors occured when getting passengers</span>
    </p>
    <!-- tables generating the list of drivers with the same name provided in the text field -->
    <table id = "response" align="center" >

      <thread>
        <tr>
        </tr>
      </thread>
        <tbody>
          <tr v-for="passenger in passengers">
            <template v-for="line in passenger.split(']')">{{line}}<br></template> 
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
