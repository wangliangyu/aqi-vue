import echarts from 'echarts'
import axios from 'axios'

const vuePlugin = {
  install: function (Vue, options) {
    Vue.prototype.$echarts = echarts;

    Vue.prototype.$axios = axios;
    Vue.prototype.$axios.defaults.headers.post['content-Type'] = 'application/json';
  }
};

export default vuePlugin
