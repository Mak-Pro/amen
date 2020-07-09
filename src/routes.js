import Main from './Projects/Main/Main.vue';
import AllWorks from './Projects/AllWorks/AllWorks.vue';
import CaseAnkrOld from './Projects/CaseAnkrOld/CaseAnkrOld.vue';
import CaseAnkrNew from './Projects/CaseAnkrNew/CaseAnkrNew.vue';
import CasePhantasma from './Projects/CasePhantasma/CasePhantasma.vue';
import CaseNos from './Projects/CaseNos/CaseNos.vue';
import CaseDeepcloud from './Projects/CaseDeepcloud/CaseDeepcloud.vue';
import CaseAlita from './Projects/CaseAlita/CaseAlita.vue';
import CaseMobydick from './Projects/CaseMobydick/CaseMobydick.vue';


export const routes = [
	{ path: '', component: Main, name: 'Main' },
	{ path: '/allcases', component: AllWorks, name: 'AllWorks' },
	{ path: '/ankr-old', component: CaseAnkrOld, name: 'ankr-old'},
	{ path: '/ankr-new', component: CaseAnkrNew, name: 'ankr-new'},
	{ path: '/phantasma', component: CasePhantasma, name: 'phantasma'},
	{ path: '/nos', component: CaseNos, name: 'nos'},
	{ path: '/deepcloud', component: CaseDeepcloud, name: 'deepcloud'},
	{ path: '/alita', component: CaseAlita, name: 'alita'},
	{ path: '/mobydick', component: CaseMobydick, name: 'mobydick'},
	{ path: '*', component: Main, name: 'Main'}
];