import * as types from '../types.js';

export const teamMembers = {
	state: {
		count: 3,
		persons: [
			{
				id: 1, 
				name: 'Denis Uminski', 
				position: 'executive director',
				facebookUrl: 'https://www.facebook.com/denis.uminski.3',
				telegramUrl: 'https://t.me/denuminski'
			},
			{
				id: 2,  
				name: 'Vitalii Pyshko', 
				position: 'co-founder / creative director',
				facebookUrl: 'https://www.facebook.com/vitaly.pyshko',
				telegramUrl: 'https://t.me/VitaliiPyshko'
			},
			{
				id: 3,  
				name: 'Oleksii Shpylovyi', 
				position: 'co-founder / Chief Marketing Officer',
				facebookUrl: 'https://www.facebook.com/petri.s.pasanen',
				telegramUrl: 'https://t.me/AlexShpylovyi'
			},
			{
				id: 4,  
				name: 'Valerie Polivoda', 
				position: 'Chief Operating Officer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 5,  
				name: 'Maksym Prokopenko', 
				position: 'front-end master',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 6,  
				name: 'Emma Galstyan', 
				position: 'front-end developer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 7,  
				name: 'Galina Bublik', 
				position: 'back-end developer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 8,  
				name: 'Maksym Spirin', 
				position: 'senior ux/ui',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 9,  
				name: 'Olena Kayinska', 
				position: 'content marketing manager',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 10,  
				name: 'Olena Fedorova', 
				position: 'brand designer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 11,  
				name: 'Marla Chechuieva', 
				position: 'UI designer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 12,  
				name: 'Alisa Grace', 
				position: 'illustration artist',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 13,  
				name: 'Ostap Vasylyev', 
				position: 'senior Ux/ui',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 14,  
				name: 'Olga Baydalinova', 
				position: '3d generalist',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 15,  
				name: 'Vitalii Hopkalo', 
				position: 'BACK-END DEVELOPER',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 16,  
				name: 'Diana Kurkchy', 
				position: 'information architect',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 17,  
				name: 'Oleksandr Pyshko', 
				position: 'ux/ui designer / concept artist',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 18,  
				name: 'Nikolay Ivaschenko', 
				position: 'back-end developer',
				facebookUrl: null,
				telegramUrl: null
			},
			{
				id: 19,  
				name: 'Sergey Strekalov', 
				position: 'motion GURU',
				facebookUrl: null,
				telegramUrl: null
			},
		]
	},
	mutations: {
		[types.TEAM_PERSONS_COUNT_MUTATION]: (state, step) => {
			state.count += step;
			state.persons.slice(0, state.count);
		}
	},
	actions: {
		[types.TEAM_PERSONS_COUNT_ACTION]: ({ commit }, step) => {
			commit(types.TEAM_PERSONS_COUNT_MUTATION, step);
		},
	},
	getters: {
		[types.GET_TEAM_PERSONS]: (state) => {
			return {
				count: state.count,
				persons: state.persons.slice(0, state.count)
			}
		}
	}
}