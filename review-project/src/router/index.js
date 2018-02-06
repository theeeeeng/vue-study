import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Edit from '@/components/Edit';
import BookEdit from '@/components/BookEdit';
import Book from '@/components/Book';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      children: [
        {
          path: '',
          redirect: 'book'
        },
        {
          path: 'book',
          name: 'BookEdit',
          component: BookEdit,
        },
      ],
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
    },
  ],
  scrollBehavior (to, from, savedPosition) { // 라우터 동작 시 스크롤 위치 변경
    return { x: 0, y: 0 }
  }
});
