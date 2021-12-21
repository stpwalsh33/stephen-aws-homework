import Login from './pages/login';
import Dashboard from './pages/dashboard';

export const Routes = [
	{ path: '/', exact: true, name: 'Login', component: Login },
	{ path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard }
];