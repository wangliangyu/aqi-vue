<template>
      <!-- NAVIGATION SECTION -->
    <div class="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div class="container">

        <div class="navbar-header">
          <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <div class="navbar-brand">
            <span class="iconfont icon-mashengxiao"></span>
          </div>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><router-link :to="'/'" class="smoothScroll">Home</router-link></li>
            <li><a class="smoothScroll" href="#about">About mazai</a></li>
            <li><router-link :to="'aqitime'" class="smoothScroll">AqiTime</router-link></li>
          </ul>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
@import "../assets/css/pic/pic.css";
.icon-mashengxiao {
  font-size: 40px;
  color: darkorange;
}
</style>