<template>
  <section>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Appsus</el-menu-item>
      <el-menu-item index="2">Book store</el-menu-item>
      <el-menu-item index="3">Emails</el-menu-item>
      <el-menu-item index="4">Maps</el-menu-item>
    </el-menu>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
</style>
