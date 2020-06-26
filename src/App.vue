<template>
  <div id="app">
    <div class="el-menu-demo nav-bar">
      <span>台南市停車場</span>
    </div>
    <!-- <el-menu :default-active="activeIndex2" class="el-menu-demo nav-bar" mode="horizontal" @select="handleSelect"
      text-color="#fff">
      <el-menu-item index="1">台南市停車場</el-menu-item>
    </el-menu> -->
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
