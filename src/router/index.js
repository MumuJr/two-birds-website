import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Finca from '@/components/Finca';
import Events from '@/components/Events';
import AboutUs from '@/components/AboutUs';
import Roasters from '@/components/Roasters';
import viewEvent from '@/components/viewEvent';
import Chat from '@/components/Chat';
import SignIn from '@/components/SignIn';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/finca',
			name: 'finca',
			component: Finca
		},
		{
			path: '/events',
			name: 'events',
			component: Events
		},
		{
			path: '/aboutus',
			name: 'aboutus',
			component: AboutUs
		},
		{
			path: '/chat',
			name: 'chat',
			component: Chat,
			props: true,
			beforeEnter: (to, from, next) => {
				if (to.params.chatName) {
					next();
				} else {
					next({ name: 'signin' });
				}
			}
		},
		{
			path: '/signin',
			name: 'signin',
			component: SignIn
		},
		{
			path: '/roasters',
			name: 'roasters',
			component: Roasters
		},
		{
			path: '/:event_id',
			name: 'viewevent',
			component: viewEvent
		}
	]
});
