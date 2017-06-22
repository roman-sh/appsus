import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/book_store/BookList.vue';
import Cart from '@/components/book_store/Cart.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'book-list',
      component: BookList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
