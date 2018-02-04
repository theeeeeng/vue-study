import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Edit from '@/components/Edit';
import BookEdit from '@/components/BookEdit';
import Book from '@/components/Book';

Vue.use(Router);

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
});
