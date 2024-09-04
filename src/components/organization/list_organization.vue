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
    <el-menu-item index="4" style="position: relative;left: 200px">数据管理</el-menu-item>
    <el-menu-item index="5" style="position: relative;left: 300px">大数据展示</el-menu-item>
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
            <span>机构管理</span>
          </template>
          <el-menu-item index="2-1-1">机构信息</el-menu-item>
          <el-menu-item index="2-1-2">部门管理</el-menu-item>
          <el-menu-item index="2-1-3">员工管理</el-menu-item>
          <el-menu-item index="2-1-4">角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-2" >
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户管理</span>
        </template>
          <el-menu-item index="2-2-1">APP用户</el-menu-item>
          <el-menu-item index="2-2-2">基地授权</el-menu-item>
      </el-sub-menu>
        <el-sub-menu index="2-3" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>APP权限</span>
          </template>
          <el-menu-item index="2-3-1">APP角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-4" >
          <template #title>
            <el-icon><location /></el-icon>
            <span>Web权限</span>
          </template>
          <el-menu-item index="2-4-1">遥感服务配置</el-menu-item>
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
