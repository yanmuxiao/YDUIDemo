import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/index.vue';

Vue.use(Router)


document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);


export default new Router({
  routes: [
    {   path: '/', name: 'index', component: Index},
  ]
})
