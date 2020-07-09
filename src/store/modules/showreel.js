import * as types from '../types.js';

export const showreel = {
	state: {
		show: false,
		selectedShowreelInner: ''
	},
	mutations: {
		[types.TOGGLE_SHOWREEL_MUTATION]: (state, payload) => {
			state.show = !state.show;
			state.selectedShowreelInner = payload;
		}
	}, 
	actions: {
		[types.TOGGLE_SHOWREEL_ACTION]: ({ commit }, payload) => {
			commit(types.TOGGLE_SHOWREEL_MUTATION, payload);
		}
	},
	getters: {
		[types.TOGGLE_SHOWREEL]: (state) => {
			return {
				show: state.show,
				selectedShowreelInner: state.selectedShowreelInner
			};
		}
	}
}