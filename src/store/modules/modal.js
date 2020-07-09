import * as types from '../types.js';

export const modal = {
	state: {
		show: false,
		selectedModalInner: ''
	},
	mutations: {
		[types.TOGGLE_MODAL_MUTATION]: (state, payload) => {
			state.show = !state.show;
			state.selectedModalInner = payload;
		}
	}, 
	actions: {
		[types.TOGGLE_MODAL_ACTION]: ({ commit }, payload) => {
			commit(types.TOGGLE_MODAL_MUTATION, payload);
		}
	},
	getters: {
		[types.TOGGLE_MODAL]: (state) => {
			return {
				show: state.show,
				selectedModalInner: state.selectedModalInner
			};
		}
	}
}