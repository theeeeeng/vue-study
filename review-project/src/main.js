// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import vuefire from 'vuefire';
import firebase from 'firebase';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

const config = {
  apiKey: 'AIzaSyAel35QXr1X_OYA5pvDd-wX1dF5XzZ7HIY',
  authDomain: 'review-project-c5a79.firebaseapp.com',
  databaseURL: 'https://review-project-c5a79.firebaseio.com',
  projectId: 'review-project-c5a79',
  storageBucket: '',
  messagingSenderId: '606480748553',
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

Vue.component(Icon);
Vue.component(vuefire);
Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
