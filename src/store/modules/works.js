import * as types from '../types.js';

export const works = {
	state: {
		cases: [
			{
				id: 1,
				name: 'ANKR ICO',
				color: 'light',
				routeUrl: 'ankr-old',
				videoUrl: 'mdv-ankr-old'
			},
			{
				id: 2,
				name: 'ANKR',
				color: 'light',
				routeUrl: 'ankr-new',
				videoUrl: 'mdv-ankr-new'
			},
			{
				id: 3,
				name: 'PHANTASMA CHAIN',
				color: 'light',
				routeUrl: 'phantasma',
				videoUrl: 'mdv-phantasma'
			},
			{
				id: 4,
				name: 'nOS Client',
				color: 'light',
				routeUrl: 'nos',
				videoUrl: ''
			},
			{
				id: 5,
				name: 'DEEPCLOUD AI',
				color: 'dark',
				routeUrl: 'deepcloud',
				videoUrl: 'mdv-deepcloud-preview'
			},
			{
				id: 6,
				name: 'ALITA',
				color: 'light',
				routeUrl: 'alita',
				videoUrl: ''
			},
		]
	},

	mutations: {
		
	},
	actions: {
		
	},
	getters: {
		[types.GET_WORK_ITEMS]: (state) => {
			return {
				cases: state.cases
			}
		}
	}
}