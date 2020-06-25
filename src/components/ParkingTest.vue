<template>
  <div id="map">
    <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center" :options="mapOptions">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-control-zoom position="bottomright"></l-control-zoom>
      <v-marker-cluster ref="clusterRef">
        <l-marker v-for="(park , index) in displayData" :key="`marker-${index}`" :lat-lng="park.經緯度.split('，')">
          <l-popup :content="ParkingNews(index)"></l-popup>
        </l-marker>
      </v-marker-cluster>
    </l-map>
    <el-card class="info-box">
      <div class="info-box-title">停車場類別</div>
      <div>
        <el-select style="width:100%" v-model="category" placeholder="請選擇" @change="changeCategory">
          <el-option v-for="item in modes" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isDev: false,
        //---------------- ↓ 地圖相關設定  ↓ ----------------
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 16,
        center: [22.9977989, 120.2611459],
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        mapOptions: {
          zoomControl: false
        },
        //---------------- ↓  API相關參數  ↓ ----------------
        apiUrl: 'https://citypark.tainan.gov.tw/App/parking.ashx?',
        apiParams: [{
            name: 'publicFreePark',
            params: 'verCode=5177E3481D&type=1&ftype=1&exportTo=2'
          },
          {
            name: 'publicChargePark',
            params: 'verCode=5177E3481D&type=2&ftype=1&exportTo=2'
          },
          {
            name: 'privatePark',
            params: 'verCode=5177E3481D&type=3&ftype=1&exportTo=2'
          },
          {
            name: 'roadsideChargesPark',
            params: 'verCode=5177E3481D&type=4&ftype=1&exportTo=2'
          },
        ],

        //---------------- ↓ 回傳的資料  ↓ ----------------
        displayData: [], //要顯示的資料
        allData: [],
        //---------------- ↓ 其他資料  ↓ ----------------
        loadingStatus: {},
        //資料取得的狀態
        getDataStatus: {
          publicFreePark: false,
          publicChargePark: false,
          privatePark: false,
          roadsideChargesPark: false
        },
        modes: ['全部停車場', '路邊停車格收費路段', '民營停車場', '公有收費停車場', '公有免費停車場'],
        category: '全部停車場',
      }
    },
    watch: {
      //偵測資料載入狀態，當4個請求都完成後(不管成功或失敗)，就把loading關掉
      getDataStatus: {
        handler(statusObj) {
          let i = 0
          //將物件屬性轉成陣列，這樣就可以用forEach來取得屬性名稱
          Object.keys(statusObj).forEach(obj => {
            //當該屬性的值為true，就讓 i+1
            this.getDataStatus[obj] === true ? i++ : ''
            // i === 4的時候代表4個請求都完成了，那就關閉loading效果
            i === 4 ? this.loadingStatus.close() : ''
          })
        },
        deep: true //因為是要watch物件裡面的東西，所以深度監測要打開
      }
    },
    methods: {
      //取得所有停車場資訊
      getParkInfo() {
        //apiUrl
        let apiUrl
        this.isDev ? apiUrl = '/api?' : apiUrl = this.apiUrl
        this.apiParams.forEach(api => {
          this.$http.get(apiUrl + api.params).then(res => {
              //將陣列解構，並存到所有資料的陣列 allData
              this.allData = [...this.allData, ...res.data]
              this.Category()
            })
            .catch(err => console.log(err))
            .finally(() => {
              //不管請求是成功還是失敗，最後都會把狀態改成true
              this.getDataStatus[api.name] = true
            })
        })
      },
      Category() {
        if (this.category === '全部停車場') {
          this.displayData = this.allData
          return
        }
        this.displayData = this.allData = this.allData.filter(park => park.停車場型態 === this.category)
      },
      //下拉選單改變時觸發
      changeCategory(val) {
        if (val === '全部停車場') {
          this.displayData = this.allData
          return
        }
        this.displayData = this.allData.filter(park => park.停車場型態 === val)
      },
      ParkingNews(index) {
        return `
      ${this.displayData[index].停車場型態}<br>
      ${this.displayData[index].停車場名稱}
      `
      },
      findMe() {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          this.center = [latitude, longitude]
        })
      }
    },
    mounted() {
      this.loadingStatus = this.$loading({
        lock: true,
        text: '資料載入中，請稍後...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      this.getParkInfo()
      this.findMe()
    }
  }

</script>
