<template>
  <div id="parking">
    <div v-if="loading">
      <h1>loading...</h1>
    </div>
    <el-select v-model="selected">
      <el-option v-for="(mode, index) in modes" :key="index" :value="mode">{{ mode }}</el-option>
    </el-select>
    <div v-if="!loading" class="vue-leaflet">
      <l-map class="map" :zoom="zoom" :center="center">
        <v-geosearch :options="geosearchOptions"></v-geosearch> <!-- // 感覺很沒用 = = -->
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <v-marker-cluster ref="clusterRef">
          <div v-for="(Parking, index) in Parkings" :key="index">
            <l-marker v-if="selected === '全部停車場'" :lat-lng="Parking.經緯度.split('，')">
              <l-popup :content="ParkingNews(index)"></l-popup>
            </l-marker>
            <l-marker v-if="Parking.停車場型態 === selected" :lat-lng="Parking.經緯度.split('，')">
              <l-popup :content="ParkingNews(index)"></l-popup>
            </l-marker>
          </div>
        </v-marker-cluster>
      </l-map>
    </div>
  </div>
</template>
<script>
  import {
    Icon
  } from 'leaflet'
  import {
    OpenStreetMapProvider
  } from 'leaflet-geosearch'
  import VGeosearch from 'vue2-leaflet-geosearch'
  export default {
    components: {
      VGeosearch
    },
    name: 'Parking',
    data() {
      return {
        loading: true,
        PublicFree: [],
        PublicCharge: [],
        Private: [],
        RoadsideCharges: [],
        AllData: [],
        modes: ['全部停車場', '路邊停車格收費路段', '民營停車場', '公有收費停車場', '公有免費停車場'],
        selected: '全部停車場',
        zoom: 14,
        center: [22.9977989, 120.2611459],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        geosearchOptions: { // Important part Here
          provider: new OpenStreetMapProvider()
        }
      }
    },
    computed: {
      Parkings() {
        return this.AllData
      }
    },
    methods: {
      ParkingNews(index) {
        return `
      ${this.Parkings[index].停車場型態}<br>
      ${this.Parkings[index].停車場名稱}
      `
      },
      findMe() {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          this.center.push(latitude)
          this.center.push(longitude)
        })
      }
    },
    mounted() {
      // const cors = 'https://cors-anywhere.herokuapp.com/'
      const PublicFreeAPI =
        '/api?verCode=5177E3481D&type=1&ftype=1&exportTo=2'
      const PublicChargeAPI =
        '/api?verCode=5177E3481D&type=2&ftype=1&exportTo=2'
      const PrivateAPI = '/api?verCode=5177E3481D&type=3&ftype=1&exportTo=2'
      const RoadsideChargesAPI =
        '/api?verCode=5177E3481D&type=4&ftype=1&exportTo=2'
      this.findMe()
      const getData = async () => {
        try {
          this.PublicFree = this.$http.get(`${PublicFreeAPI}`)
          this.PublicCharge = this.$http.get(`${PublicChargeAPI}`)
          this.Private = this.$http.get(`${PrivateAPI}`)
          this.RoadsideCharges = this.$http.get(`${RoadsideChargesAPI}`)
          this.PublicFree = await this.PublicFree
          this.PublicCharge = await this.PublicCharge
          this.Private = await this.Private
          this.RoadsideCharges = await this.RoadsideCharges
          this.AllData = this.AllData
            .concat(this.PublicFree.data)
            .concat(this.PublicCharge.data)
            .concat(this.Private.data)
            .concat(this.RoadsideCharges.data)
          this.loading = false
        } catch (error) {
          console.log(error)
        }
      }
      getData()
    }
  }
  delete Icon.Default.prototype._getIconUrl
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  })

</script>
