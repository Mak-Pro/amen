Vue.config.productionTip = false

import Vue from 'vue';
import VueGtm from 'vue-gtm';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import VueFullPage from 'vue-fullpage.js'
import Vue2TouchEvents from 'vue2-touch-events';
import Vuelidate from 'vuelidate';
import VueFullpageModal from 'fullpage-vue';
import VueI18n from 'vue-i18n';

import en from './langs/en.json';
import ua from './langs/ua.json';



// VueFullPage
Vue.use(VueFullPage);


// Modal fullpage
Vue.use(VueFullpageModal);



// Vuelidate
Vue.use(Vuelidate);


// languages
Vue.use(VueI18n);


// Swipe
Vue.use(Vue2TouchEvents, {
    disableClick: false,
    touchClass: '',
    tapTolerance: 10,
    swipeTolerance: 100,
    longTapTimeInterval: 400
})



//ROUTES

Vue.use(VueRouter);

import { routes } from './routes.js';

const router = new VueRouter({
	routes,
	mode: 'history'
});


Vue.use(VueGtm, {
  id: 'GTM-P2DXNZ2',
  /*queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
    gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview:'env-4',
    gtm_cookies_win:'x'
  },*/
  enabled: true,
  debug: true,
  // loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  // ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
});




const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'ua',
	messages: {
		en,
		ua
	}
});


// AXIOS
axios.defaults.baseURL = '';

axios.interceptors.request.use(config => {
	return config;
});

axios.interceptors.response.use(response => {
	return response;
});




// VUEX
import { store } from './store/store.js';



new Vue({
	i18n,
	router,
	store,
  render: h => h(App),
}).$mount('#root')
