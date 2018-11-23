<template>
  <div class="hello">
  <br>
    <h1>{{ msg }}</h1>
    <h2>Support Services</h2>
    <ul>
  <br>
     <li><a href="#/status"><button>Fleet Status Overview</button></a></li>
      <br>
      <br>
      <li><a href="#/ranking"><button>Rankings Overview</button></a></li>
       </ul>
     </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Intercity Ride Sharing System web application '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
