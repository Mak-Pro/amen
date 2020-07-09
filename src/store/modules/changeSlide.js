import * as types from '../types.js';

export const changeSlide = {
	state: {
		slideNum: 0,
		slides: [
			'phantasma', 'ankr', 'deepcloud', 'nos'
		],
		currentSlide: 'phantasma',
		slideMoveDirection: null
	},
	mutations: {
		[types.PREV_SLIDE_MUTATION]: (state, direction) => {
			state.slideNum--;
			if(state.slideNum < 0) {
				state.slideNum = state.slides.length - 1;
			}
			state.currentSlide = state.slides[state.slideNum];
			state.slideMoveDirection = direction;
		},
		[types.NEXT_SLIDE_MUTATION]: (state, direction) => {
			state.slideNum++;
			if(state.slideNum > state.slides.length - 1) {
				state.slideNum = 0;
			}
			state.currentSlide = state.slides[state.slideNum];
			state.slideMoveDirection = direction;
		}
	}, 
	actions: {
		[types.NEXT_SLIDE_ACTION]: ({ commit }, direction) => {
			commit(types.NEXT_SLIDE_MUTATION, direction);
		},
		[types.PREV_SLIDE_ACTION]: ({ commit }, direction) => {
			commit(types.PREV_SLIDE_MUTATION, direction);
		}
	},
	getters: {
		[types.CURRENT_SLIDE]: (state) => {
			return {
				slides: state.slides,
				currentSlide: state.currentSlide,
				slideMoveDirection: state.slideMoveDirection,
				slideNum: state.slideNum
			};
		}
	}
}