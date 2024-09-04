<template>
  <list></list>
  <div style="height: 800px;width: 1440px;position: absolute;border: black solid;left: 183px;top: 67px">
    <div class="title">
    </div>

    <div id="map" style="height: 800px;width: 1440px;position: absolute">

    </div>
  </div>



</template>

<style scoped>

</style>

<script setup>
import { defineComponent, ref, onMounted } from "vue";
import list from '@/components/index/list.vue';

onMounted( ()=> {
  //定义地图中心点坐标
  var center = new TMap.LatLng(36.314434, 120.400324)
  //定义map变量，调用 TMap.Map() 构造函数创建地图
  var map = new TMap.Map(document.getElementById('map'), {
    center: center,//设置地图中心点坐标
    zoom: 5.2,   //设置地图缩放级别
    pitch: 43.5,  //设置俯仰角
    rotation: 15    //设置地图旋转角度
  });
  var infoWindowLocation = new TMap.LatLng(36.314434, 120.400324);//创建一个坐标
//创建InfoWindow实例，并进行初始化
  var infowindow = new TMap.InfoWindow({
    content: "青岛农业大学基地1", //信息窗口内容
    position: infoWindowLocation,//显示信息窗口的坐标
    map: map
  });
})


</script>
