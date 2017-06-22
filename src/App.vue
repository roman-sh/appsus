<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
    import BookList from './components/book_store/BookList.vue';
    import Cart from './components/book_store/Cart.vue';
    export default {
        name: 'app',
        components: {
            BookList,
            Cart
        }
    }
</script>

<style scoped>
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>
