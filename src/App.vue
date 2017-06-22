<template>
    <div id="app">
      <main-nav></main-nav>
      <router-view></router-view>
    </div>
</template>

<script>
    import BookList from './components/book_store/BookList.vue';
    import Cart from './components/book_store/Cart.vue';
    import Index from './components/Index.vue';
    import MainNav from './components/MainNav.vue';
    export default {
        name: 'app',
        components: {
            BookList,
            Cart,
            Index,
            MainNav
        }
    }
</script>

<style scoped>
  html,body {
    padding: 0;
    margin: 0;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      text-align: center;
      color: #2c3e50;
  }
</style>
