<template>
    <div>
       <!-- header section -->
       <navbar-components/>
       <!-- body section -->
       <slot></slot>
       <!-- footer section -->
       
    </div>
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents'
    export default {
        name : 'TemplateView',
        components : {
            NavbarComponents
        }
    }
</script>

<style lang="scss" scoped>

</style>