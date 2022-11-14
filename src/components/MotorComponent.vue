<template>
    <div>
        <vs-card type="4">
            <template #title>
              <h3>{{motor.name}}</h3>
            </template>
            <template #img>
              <img :src="motor.featured" alt="">
            </template>
            <template #text>
              <p>
                {{motor.slug}}
              </p>
            </template>
          </vs-card>
        
    </div>
</template>

<script>
    export default {
        name : 'MotorComponents',
        props : {
            motor :{}
        }
    }
</script>

<style lang="scss" scoped>

</style>