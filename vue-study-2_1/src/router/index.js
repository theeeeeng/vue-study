import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Menu1 from '@/components/Menu1/Menu1';
import Menu2 from '@/components/Menu2/Menu2';
import Menu3 from '@/components/Menu3/Menu3';
import Menu1Sub1 from '@/components/Menu1/Menu1Sub1/Menu1Sub1';
import Menu1Sub2 from '@/components/Menu1/Menu1Sub2/Menu1Sub2';
import Menu1Sub3 from '@/components/Menu1/Menu1Sub3/Menu1Sub3';
import Menu1Sub4 from '@/components/Menu1/Menu1Sub4/Menu1Sub4';
import Menu1Sub5 from '@/components/Menu1/Menu1Sub5/Menu1Sub5';
import Menu1Sub6 from '@/components/Menu1/Menu1Sub6/Menu1Sub6';
import Menu2Sub1 from '@/components/Menu2/Menu2Sub1/Menu2Sub1';
import Menu2Sub2 from '@/components/Menu2/Menu2Sub2/Menu2Sub2';
import Menu3Sub1 from '@/components/Menu3/Menu3Sub1/Menu3Sub1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/menu1',
      name: 'Menu1',
      component: Menu1,
      children: [
        { path: '/', component: Menu1Sub1 },
        { path: 'sub1', component: Menu1Sub1 },
        { path: 'sub2', component: Menu1Sub2 },
        { path: 'sub3', component: Menu1Sub3 },
        { path: 'sub4', component: Menu1Sub4 },
        { path: 'sub5', component: Menu1Sub5 },
        { path: 'sub6', component: Menu1Sub6 },
      ],
    },
    {
      path: '/menu2',
      name: 'Menu2',
      component: Menu2,
      children: [
        { path: '/', component: Menu2Sub1 },
        { path: 'sub1', component: Menu2Sub1 },
        { path: 'sub2', component: Menu2Sub2 },
      ],
    },
    {
      path: '/menu3',
      name: 'Menu3',
      component: Menu3,
      children: [
        { path: '/', component: Menu3Sub1 },
        { path: 'sub1', component: Menu3Sub1 },
      ],
    },
  ],
});
