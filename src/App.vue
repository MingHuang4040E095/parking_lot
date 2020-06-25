<template>
  <div id="app">
    <ParkingTest v-if="isDev" />
    <Parking v-else />
  </div>
</template>

<script>
  import Parking from './components/Parking.vue'
  import ParkingTest from './components/ParkingTest.vue'
  export default {
    name: 'App',
    components: {
      Parking,
      ParkingTest
    },
    data() {
      return {
        // isDev: false
        isDev: true
      }
    }
  }

</script>
