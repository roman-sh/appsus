import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/BookList';
import Cart from '@/components/Cart';


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
