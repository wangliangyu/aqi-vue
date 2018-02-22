<template>
  <div id="aqiWithTime">
    <the-navigation></the-navigation>
    
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      
      <el-form-item prop="city">
          <el-input v-model="ruleForm.city" class="inputText" placeholder="请输入城市" 
          @blur="getStations" clearable></el-input>
      </el-form-item>

      <el-form-item prop="selectedStation">
        <el-select v-model="ruleForm.selectedStation" class="inputText" placeholder="请选择监测站">
          <el-option v-for="station in stations" :key="station" :value="station">{{ station }}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="dateRange" id="dateRange">
        <el-date-picker class="inputText" v-model="ruleForm.dateRange" type="daterange" range-separator="至" 
          start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-select v-model="selectedAtmosphericIndex" class="inputText" placeholder="请选择指标">
          <el-option v-for="index in indexes" :key="index" :value="index">{{ index }}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="getAqiData('ruleForm')">搜索</el-button>
      </el-form-item>
    </el-form>

    <div id="aqiTimeChart"></div>
    <the-footer></the-footer>

  </div>
</template>

<script>
import TheNavigation from './TheNavigation.vue'
import TheFooter from './TheFooter.vue'

export default {
  data() {
    return {
      ruleForm: {
        city: '',
        selectedStation: '',
        dateRange: []
      },
      rules: {
        city: [
          { required: true, message: '请输入城市', trigger: 'blur' }
        ],
        selectedStation: [
          { required: true, message: '请选择监测站', trigger: 'change' }
        ],
        dateRange: [
          { required: true, message: '请输入开始日期与结束日期', trigger: 'change' }
        ]
      },
      selectedAtmosphericIndex: 'aqi',
      aqiData: [],
      stations: [],
      maxValueOfselectedIndex: 0,
      minValueOfselectedIndex: 0,
      averageInterval: 0,
      indexes:['aqi', 'co', 'co_24h', 'no2', 'no2_24h', 'o3', 'o3_24h', 'o3_8h', 
        'o3_8h_24h', 'pm10', 'pm10_24h', 'pm2_5', 'pm2_5_24h', 'so2', 'so2_24h']
    };
  },

  components: {
    'the-navigation': TheNavigation,
    'the-footer': TheFooter
  },

  methods: {
    getStations() {
      console.log('city', this.ruleForm.city);
      this.$axios
        .get('/aqi/station', {
          params: {
            city: this.ruleForm.city
          }
        })
        .then(res => {
          this.stations = res.data;
          console.log('this.stations', this.stations);
        })
        .catch(err => {
          //请求报错
          console.error('get stations of ', this.city, ' failed', err);
        });
    },

    getAqiData(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .get('/aqi', {
              params: {
                city: this.ruleForm.city,
                station: this.ruleForm.selectedStation,
                dateRange:this.ruleForm.dateRange,
                index: this.selectedAtmosphericIndex
              }
            })
            .then(res => {
              this.aqiData = res.data;
              console.log('aqiData', this.aqiData);

              this.getLimitValue();
              this.createChart();
            })
            .catch(err => {
              console.error('get aqi of ', this.city, ' errored', err);
            });
        } else {
          console.log('表单验证未通过');
          return false;
        }
      });
    },

    getLimitValue() {
      //获取aqiData中选中指标的最大值与最小值
      let dataArr = [];
      this.aqiData.forEach(item => {
        dataArr.push(item[this.selectedAtmosphericIndex]);
      });

      let maxValue = Math.max(...dataArr);
      let minValue = Math.min(...dataArr);
      console.log('value', maxValue, minValue);
      //这边主要是为了数据看上去间隔更清晰，如果数据最大值小于0.1的话还需要再分一次，暂时没想其他办法处理
      if(maxValue > 10){
        let lengthOfValue = maxValue.toString().length;
        this.maxValueOfselectedIndex = Math.ceil(maxValue/10) * 10;
        this.minValueOfselectedIndex = Math.floor(minValue/10) * 10;
        this.averageInterval = Math.round((this.maxValueOfselectedIndex - this.minValueOfselectedIndex)/4);
      }else{
        this.maxValueOfselectedIndex = Math.ceil(maxValue * 10)/10;
        this.minValueOfselectedIndex = Math.floor(minValue * 10)/10;
        this.averageInterval = Math.round((this.maxValueOfselectedIndex - this.minValueOfselectedIndex)/4 * 100)/100;
      }
      
      console.log(this.maxValueOfselectedIndex, this.minValueOfselectedIndex, this.averageInterval);
    },

    createChart() {
      let myChart = this.$echarts.init(document.getElementById('aqiTimeChart'));
      let index = this.selectedAtmosphericIndex;
      let chartName = this.ruleForm.city + '市' + this.ruleForm.selectedStation + '站' + index;
      
      let option = {
        title: {
          text: chartName
        },
        tooltip: { trigger: 'axis' },
        xAxis: {
          data: this.aqiData.map(item => {
            return item.time_point;
          })
        },
        yAxis: {
          splitLine: { show: false }
        },
        legend: {
          data: [index]
        },
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: { yAxisIndex: 'none' },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{ startValue: '2017-11-26T01:00:00Z' }, { type: 'inside' }],
        visualMap: {
          top: 50,
          right: 0,
          pieces: [
            { gt: this.minValueOfselectedIndex, lte: this.minValueOfselectedIndex + this.averageInterval, color: '#096' },
            { gt: this.minValueOfselectedIndex + this.averageInterval, lte: this.minValueOfselectedIndex + this.averageInterval *2, color: '#ffde33' },
            { gt: this.minValueOfselectedIndex + this.averageInterval *2, lte: this.minValueOfselectedIndex + this.averageInterval *3, color: '#ff9933' },
            { gt: this.minValueOfselectedIndex + this.averageInterval *3, lte: this.minValueOfselectedIndex + this.averageInterval *4, color: '#cc0033' },
            { gt: this.maxValueOfselectedIndex, color: '#660099' }            
          ],
          outOfRange: { color: '#999' }
        },
        series: {
          name: chartName,
          type: 'line',
          data: this.aqiData.map(item => {
            return item[index];
          }),
          markLine: {
            silent: true,
            data: [
              { yAxis: this.minValueOfselectedIndex + this.averageInterval },
              { yAxis: this.minValueOfselectedIndex + this.averageInterval *2 },
              { yAxis: this.minValueOfselectedIndex + this.averageInterval *3 },
              { yAxis: this.maxValueOfselectedIndex }
            ]
          }
        }
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style>
/* #aqiWithTime {
  border-top: 1px solid #f0f0f0;
} */

.inputText {
  width: 150px;
}
.el-form-item {
  margin-top: 22px;
  float: left;
  width: 200px;
}
#dateRange {
  width: 400px;
}
.my-form-margin {
  position: relative;
  margin: 30px 0 10px 0;
}

#aqiTimeChart {
  clear: both;
  height: 600px;
}
</style>
