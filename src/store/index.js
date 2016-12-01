import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import home from './modules/home';

Vue.use(Vuex);
console.log('actions:')
console.log(actions)

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		home
	}
})
