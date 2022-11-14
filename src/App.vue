<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
 name : 'App',
 methods:{
   ...mapActions(['fetchNearby', 'fetchRepair', 'fetchGarage', 'fetchMotor',])
 },
 created(){
   this.fetchNearby()
   this.fetchRepair()
   this.fetchGarage()
   this.fetchMotor()
 } 
}
</script>
<style>
.view-more {
  float: right;
}
a{
 text-decoration: none;
 color: black;
}

.discussion{
  text-align: center;
}
.btn{
  background-color: #2B5434;
  color: white;
  text-transform: uppercase;
  border-radius: 10px;
}
.feedback{
  text-align: center;
}
.form-feed{
  text-align: center;
  padding-left: 400px
}
</style>
