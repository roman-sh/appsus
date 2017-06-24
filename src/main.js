import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
// import MainMaps from 'vue-yandex-maps';

export const eventBus = new Vue({
  methods: {
    emailWasClicked(email) {
      this.$emit('emailWasClicked', email)
    }
  }
});

Vue.use(ElementUI);
// Vue.use(MainMaps);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
