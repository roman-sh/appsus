import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index.vue';
import BookList from '@/components/book_store/BookList.vue';
import Cart from '@/components/book_store/Cart.vue';
import Maps from '@/components/book_store/MainMaps.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/book-store',
      name: 'book-list',
      component: BookList
    },
    {
      path: '/book-store/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/maps',
      name: 'maps',
      component: MainMaps
    }
  ]
})
