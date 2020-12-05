import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Game from '@/views/Game.vue';

const DEFAULT_TITLE = 'Clicker Hero';
const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Game',
    component: Game,
    meta: { title: DEFAULT_TITLE }
	},
	{
		path: '/about',
    name: 'About',
    meta: { title: DEFAULT_TITLE + ' - About'},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/achievements',
    name: 'Achievements',
    meta: { title: DEFAULT_TITLE + ' - Achievements'},
    component: () => import('@/components/Achievements.vue')
  }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
