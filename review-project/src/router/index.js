import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Edit from '@/components/Edit';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import vuefire from 'vuefire';
import firebase from 'firebase';

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

const config = {
  apiKey: 'AIzaSyAel35QXr1X_OYA5pvDd-wX1dF5XzZ7HIY',
  authDomain: 'review-project-c5a79.firebaseapp.com',
  databaseURL: 'https://review-project-c5a79.firebaseio.com',
  projectId: 'review-project-c5a79',
  storageBucket: '',
  messagingSenderId: '606480748553',
};
firebase.initializeApp(config);

Vue.use(Router);
Vue.component(Icon);
Vue.component(vuefire);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
    },
  ],
});
