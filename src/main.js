import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import MainMaps from 'vue-yandex-maps';

export const eventBus = new Vue({
  methods: {
    selectEmail(email) {
      this.$emit('selectEmail', email)
    },
    emailWasClicked(email) {
      this.$emit('emailWasClicked', email)
    },
    deleteEmail(email) {
      this.$emit('deleteEmail', email)
    }
  }
});

Vue.use(ElementUI);
Vue.use(MainMaps);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
