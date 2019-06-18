import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
	{path: '/goods', component: goods},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller}
];

var router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});
export default router;

router.push('/goods');
