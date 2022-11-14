<template>
    <div>
        <vs-card type="1">
            <template #title>
              <h3>{{nearby.name}}</h3>
            </template>
            <template #img>
              <img :src="nearby.featured" alt="">
            </template>
            <template #text>
              <p>
                {{nearby.slug}}
              </p>
            </template>
          </vs-card>
        
        
    </div>
</template>

<script>
    export default {
        name : 'NearbyComponents',
        props :{
            nearby : {}
        }
    }
</script>

<style>

</style>