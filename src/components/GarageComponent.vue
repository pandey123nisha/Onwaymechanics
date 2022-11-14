<template>
    <div>
        <vs-card type="1">
            <template #title>
              <h3>{{garage.name}}</h3>
            </template>
            <template #img>
              <img :src="garage.images" alt="">
            </template>
            <template #text>
              <p>
                {{garage.slug}}
              </p>
            </template>
          </vs-card>
        
    </div>
</template>

<script>
    export default {
        name : 'GarageComponent',
        props :{
            garage : {}
        }
    }
</script>

