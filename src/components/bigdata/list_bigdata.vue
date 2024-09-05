<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#008B45"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  router
style="position:relative;left: -8px"
  >
    <h5 class="mb-2" style="font-size: 20px;color: white;position: relative;top: -20px;left: 40px">智慧农业</h5>
    <el-menu-item index="/" style="position: relative;left: 200px;width: 200px">首页</el-menu-item>
    <el-menu-item index="/baseland" style="position: relative;left: 200px;width: 200px">基地管理</el-menu-item>
    <el-menu-item index="/organization" style="position: relative;left: 200px;width: 200px">机构管理</el-menu-item>
    <el-menu-item index="/device"style="position: relative;left: 200px;width: 250px">设备管理</el-menu-item>
    <el-menu-item index="/datamanage" style="position: relative;left: 200px">数据管理</el-menu-item>
    <el-menu-item index="/bigdata" style="position: relative;left: 300px">大数据展示</el-menu-item>
  </el-menu>

  <div style="height: 750px;width: 400px" >
    <el-col :span="12">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          style="height: 753px;width: 200px;position: relative;left: -20px"
          router>

        <el-sub-menu index="2-1" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>大屏管理</span>
          </template>
          <el-menu-item index="2-1-1">基础设置</el-menu-item>
          <el-menu-item index="2-1-2">菜单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-2" >
        <template #title>
          <el-icon><location /></el-icon>
          <span>大屏数据配置</span>
        </template>
          <el-menu-item index="2-2-1">通用菜单配置</el-menu-item>
          <el-menu-item index="2-1-1">通用数据配置</el-menu-item>
          <el-menu-item index="2-1-2">地图图标配置</el-menu-item>
          <el-menu-item index="2-1-2">工具栏配置</el-menu-item>
          <el-menu-item index="2-1-2">地图边界配置</el-menu-item>
      </el-sub-menu>
        <el-sub-menu index="2-3" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>设施管理</span>
          </template>
          <el-menu-item index="2-3-1">设施列表</el-menu-item>
          <el-menu-item index="2-2-2">设施分类管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-3" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>企业管理</span>
          </template>
          <el-menu-item index="2-3-1">企业列表</el-menu-item>
          <el-menu-item index="2-2-2">产品列表</el-menu-item>
          <el-menu-item index="2-2-3">作品列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-1" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>内容管理</span>
          </template>
          <el-menu-item index="2-1-1">故事库</el-menu-item>
          <el-menu-item index="2-1-2">音视频库</el-menu-item>
          <el-menu-item index="2-1-1">图片库</el-menu-item>
          <el-menu-item index="2-1-2">VR库</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>

</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
