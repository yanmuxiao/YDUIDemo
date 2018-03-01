import Vue from 'vue'
import Router from 'vue-router'


import Guide from '@/views/guide.vue';
import Index from '@/views/index.vue';

Vue.use(Router)


document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);


export default new Router({
  routes: [
    {   path: '/', name: 'guide', component: Guide},
    {   path: '/index', name: 'index', component: Index},
  ]
})
