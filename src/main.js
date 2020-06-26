import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlZoom
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "./style/style.scss";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("v-marker-cluster", Vue2LeafletMarkerCluster);
Vue.component("l-control-zoom", LControlZoom);
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers["Cache-Control"] = "no-cache";
// axios.defaults.headers["pragma"] = "no-cache";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// http request 欄截
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = { // 如果沒有cors的問題則可以都不加
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Authorization,Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Max-Age": "86400"
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// Vue.use(VueAxios, axios);
Vue.prototype.$http = axios
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
