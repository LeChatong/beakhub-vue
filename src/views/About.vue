<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export  default {
    created() {
      console.log('Je suis crée !')
    },
    mounted() {
      console.log('Je suis monté !')
    },
    beforeDestroy() {
      console.log('Je vais être détruit !')
    },
    beforeCreate() {
      console.log('Je vais être crée !')
    },
    destroyed() {
      console.log('Je suis détruit !')
    },
    beforeMount() {
      console.log('Je vais être monté !')
    }
  }
</script>

<style>
</style>
