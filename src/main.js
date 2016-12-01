import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routers from './router';
import store from './store';

// debugger模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	base: __dirname,
	routes: routers
})

console.log('store: ')
console.log(store)

const app = new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');

