import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// modules
import { navigation } from './modules/navigation.js';
import { modal } from './modules/modal.js';
import { changeSlide } from './modules/changeSlide.js';
import { teamMembers } from './modules/teamMembers.js';
import { works } from './modules/works.js';
import { showreel } from './modules/showreel.js';

export const store = new Vuex.Store({
	state: {
		
	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: {
		
	},
	modules: {
		navigation,
		modal,
		changeSlide,
		teamMembers,
		works,
		showreel
	}
});