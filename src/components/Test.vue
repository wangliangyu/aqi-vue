<template>
  <div class="test" style="float: left">
    <form class='form-inline'>
      <div class="form-group">
        <!--该输入框还需要非空验证，还需要做模糊搜索-->
        <label class="sr-only" for="city">城市</label>
        <input type="text" class="form-control" name="city" placeholder="城市" v-model="city" @blur='getStations'/>
      </div>
      <div class="form-group">
        <label class="sr-only" for="station">监测站</label>
        <select class="form-control" v-model="selectedStation" @change='changeStation'>
          <!--监测站，需要非空校验-->
          <option disabled>请选择监测站</option>
          <option v-for="station in stations">{{ station }}</option>
        </select>
      </div>

      <div class="form-group">
        <!--时间范围，需要非空校验-->
        <label class="sr-only" for="dateRange">时间范围</label>
        <input type="text" class="form-control" id='dateRange' placeholder="时间范围" v-model='dateRange'
               @blur='getDateArr'/>
      </div>

      <div class="form-group">
        <label class="sr-only" for="index">指标</label>
        <select class="form-control" v-model="selectedAtmosphericIndex" @change='changeIndex'>
          <option>aqi</option>
          <option>co</option>
          <option>co_24h</option>
          <option>no2</option>
          <option>no2_24h</option>
          <option>o3</option>
          <option>o3_24h</option>
          <option>o3_8h</option>
          <option>o3_8h_24h</option>
          <option>pm10</option>
          <option>pm10_24h</option>
          <option>pm2_5</option>
          <option>pm2_5_24h</option>
          <option>so2</option>
          <option>so2_24h</option>
          <!--<option>quality</option>-->
          <!--<option>primary_pollutant</option>-->
        </select>
      </div>

    </form>

    <div id='chart'></div>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        city: '',
        selectedStation: '',
        dateRange: '',
        selectedAtmosphericIndex: 'aqi',
        aqiData: [],
        stations: [],
        dateArr: [],
        maxValueOfselectedAtmosphericIndex: 0,
        minValueOfselectedAtmosphericIndex: 0,
        averageInterval: 0
      }
    },

    methods: {
      getStations() {
        this.$axios.get('/aqi/station', {
          params: {
            city: this.city
          }
        }).then(res => {
          this.stations = res.data;
          console.log('this.stations', this.stations);
        }).catch(err => {
          //请求报错
          console.error('get stations of ', this.city, ' failed', err);
        });
      },

      changeStation() {
        //如果时间范围不为空的话，还需要查询aqiData
        if (this.dateRange) {
          this.getAqiData();
        }
      },

      getDateArr() {
        let that = this;
        laydate.render({
          elem: '#dateRange',
          min: '2017-11-26',
          //还需要将今天设置为最大值
          range: true,
          done: function (val) {
            that.dateRange = val;
            that.dateArr = val.split(' ');
            that.getAqiData();
          }
        });
      },

      getAqiData() {
        this.$axios.get('/aqi', {
          params: {
            city: this.city,
            station: this.selectedStation,
            startDate: this.dateArr[0] + 'T00:00:00Z',
            endDate: this.dateArr[2] + 'T24:00:00Z'
          }
        }).then(res => {
          this.aqiData = res.data;
          console.log('this', this);
          this.createChart();
        }).catch(err => {
          console.error('get aqi of ', this.city, ' errored', err);
        });
      },

      changeIndex: function () {
        //todo 获取aqiData中选中指标的最大值与最小值
//        let indexValue = [];
//        this.aqiData.forEach(function (item) {
//          indexValue.push(item[this.selectedAtmosphericIndex]);
//        });
//        indexValue.sort(function (x, y) {
//          return x - y;
//        });
//
//        this.maxValueOfselectedAtmosphericIndex = indexValue[indexValue - 1];
//        this.maxValueOfselectedAtmosphericIndex = indexValue[0];
//        this.averageInterval = Math.ceil((this.maxValueOfselectedAtmosphericIndex - this.maxValueOfselectedAtmosphericIndex) / 4);

        this.createChart();
      },

      createChart: function () {
        let myChart = this.$echarts.init(document.getElementById('chart'));
        let option = {
          title: {
            text: this.city + '市' + this.selectedStation + '站'
          },
          tooltip: {trigger: 'axis'},
          xAxis: {
            data: this.aqiData.map(item => {
              return item.time_point;
            })
          },
          yAxis: {
            splitLine: {show: false}
          },
          legend: {
            data: [this.selectedAtmosphericIndex]
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {yAxisIndex: 'none'},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [
            {startValue: '2017-11-26T01:00:00Z'},
            {type: 'inside'}
          ],
          visualMap: {
            top: 50,
            right: 0,
            pieces: [
              {gt: 0, lte: 50, color: '#096'},
              {gt: 50, lte: 100, color: '#ffde33'},
              {gt: 100, lte: 150, color: '#ff9933'},
              {gt: 150, lte: 200, color: '#cc0033'},
              {gt: 200, color: '#660099'}
            ],
            outOfRange: {color: '#999'}
          },
          series: {
            name: this.city + '市' + this.selectedStation + '站' + this.selectedAtmosphericIndex,
            type: 'line',
            data: this.aqiData.map(item => {
              return item[this.selectedAtmosphericIndex];
            }),
            markLine: {
              silent: true,
              data: [
                {yAxis: 50},
                {yAxis: 100},
                {yAxis: 150},
                {yAxis: 200}
              ]
            }
          }
        };

        myChart.setOption(option);
      }
    }
  }

</script>

<style>
  #chart {
    height: 500px;
    width: 1000px;
  }
</style>
