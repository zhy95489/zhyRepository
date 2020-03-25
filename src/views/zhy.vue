

<template>
<div>
  
  <div class="wrap" id="app">
    <div id="az">
      <!-- <HelloWorld></HelloWorld> -->
  </div>
    <div class="search_form">
      <div class="logo">
        <img src="../image/logo-天知道.png" alt="logo" />
      </div>
      <div class="form_group">
        <input
          type="text"
          @keyup.enter="searchWeather"
          v-model="city"
          class="input_txt"
          placeholder="请输入查询的天气"
        />
        <button class="input_sub" @click="searchWeather">搜 索</button>
      </div>
      <div class="hotkey">
        <a href="javascript:;" @click="changeCity('郑州')">郑州</a>
        <a href="javascript:;" @click="changeCity('长葛')">长葛</a>
        <a href="javascript:;" @click="changeCity('上海')">上海</a>
        <a href="javascript:;" @click="changeCity('北京')">北京</a>
      </div>
    </div>
    <ul class="weather_list">
      <li v-for="item in weather" :key="item.id">
        <div class="info_type">
          <span class="iconfont">{{item.type}}</span>
        </div>
        <div class="info_temp">
          <b>{{item.low}}</b>
          ~
          <b>{{item.high}}</b>
        </div>

        <div class="info_date">
          <!-- <span>{{item.fengli}},{{item.fengxiang}}</span> -->
          <span>{{item.date}}</span>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<style lang="less">
 @import "../css/index-天气.css";
 @import "../css/reset-天气.css";
</style>
<script>
// import HelloWorld from "../components/HelloWorld"
export default {
  name: 'zhy',
  // components:{
  //   HelloWorld
  // }
}
</script>

<script src="../js/main-天知道.js"></script>