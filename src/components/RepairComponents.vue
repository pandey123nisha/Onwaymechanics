<template>
    <div>
        <vs-card type="1">
            <template #title>
              <h3>{{repair.name}}</h3>
            </template>
            <template #img>
              <img :src="repair.featured" alt="">
            </template>
            <template #text>
              <p>
              {{repair.address}}
              </p>
            </template>
           
          </vs-card>
        
    </div>
</template>

<script>
    export default {
        name : 'RepairComponents',
        props :{
            repair : {}
        }
    }
</script>

<style lang="scss" scoped>

</style>