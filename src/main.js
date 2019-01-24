import Vue from 'vue';
import Inputmask from 'inputmask';
import ElementUI from 'element-ui';
import './theme/element-variables.scss';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.directive('mask', {
  bind(el, binding) {
    Inputmask(binding.value).mask(el.getElementsByTagName('INPUT')[0]);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
