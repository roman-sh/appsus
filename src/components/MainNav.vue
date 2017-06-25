<template>
  <section>
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link to="/"><el-menu-item index="1">Appsus</el-menu-item></router-link>
      <router-link to="/book-store"><el-menu-item index="2">Book-store</el-menu-item></router-link>
      <el-menu-item index="3">Emails</el-menu-item>
      <router-link to="/places"><el-menu-item index="4">Places</el-menu-item></router-link>
    </el-menu>
  </section>
</template>

<script>
  export default {
    name: 'main-nav',
    // data() {
    //   return {
    //     activeIndex: '1',
    //     activeIndex2: '1'
    //   };
    // },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
</style>
