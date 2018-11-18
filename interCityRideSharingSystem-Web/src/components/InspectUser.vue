<template>
  <div id="InspectUser">
    <h2>Fleet Status View</h2>
    <table align="center">
      <tr>
          <td>Active Drivers</td>
          <td>Active Passengers</td>
          <td>Active Routes</td>
      </tr>
      <tr>
          <td>
              <a href="#/driver"><button>Inspect Drivers</button></a>
          </td>
          <td>
              <a href="#/passenger"><button>Inspect Passengers</button></a>
          </td>
           <td>
              <a href="#/route"><button>Inspect Routes</button></a>
          </td>
      </tr>
    </table>
    <p>
      <span style="color:red">Error: Message text comes here if have any</span>
    </p>
  </div>
</template>

<script>
</script>

<style>
#InspectUser {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>