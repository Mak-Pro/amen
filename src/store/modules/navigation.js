import * as types from '../types.js';

export const navigation = {
	state: {
		show: false,
		hamburgerPreventClick: false 
	},
	mutations: {
		[types.TOGGLE_NAVIGATION_MUTATION]: (state, payload) => {
			state.show = !state.show;
			state.hamburgerPreventClick = true;
			setTimeout(() => {
				state.hamburgerPreventClick = !state.hamburgerPreventClick;
			}, payload);
		}
	}, 
	actions: {
		[types.TOGGLE_NAVIGATION_ACTION]: ({ commit }, payload) => {
			commit(types.TOGGLE_NAVIGATION_MUTATION, payload.delay);
		},
	},
	getters: {
		[types.TOGGLE_NAVIGATION]: (state) => {
			return {
				show: state.show,
				hamburgerPreventClick: state.hamburgerPreventClick
			};
		}
	}
}