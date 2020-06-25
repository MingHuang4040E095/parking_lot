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
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
