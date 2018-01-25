import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

Vue.use(Router);
Vue.component('icon', Icon);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
