// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import 'vue-ydui/dist/ydui.base.css';
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
Vue.component(Layout.name, Layout);
Vue.use(Layout)



import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
Vue.use(NavBar)
Vue.use(NavBarBackIcon)
Vue.use(NavBarNextIcon)


import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar';
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);
Vue.use(TabBar)
Vue.use(TabBarItem)


import {Icons} from 'vue-ydui/dist/lib.rem/icons';
Vue.component(Icons.name, Icons);
Vue.use(Icons)


import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
Vue.use(SliderItem)


import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
Vue.component(PullRefresh.name, PullRefresh);
Vue.use(PullRefresh)


import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);
Vue.use(ListTheme)
Vue.use(ListItem)
Vue.use(ListOther)


import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.use(CellGroup)
Vue.use(CellItem)




import {Search} from 'vue-ydui/dist/lib.rem/search';
Vue.component(Search.name, Search);
Vue.use(Search)

import { GridsGroup, GridsItem } from 'vue-ydui/dist/lib.rem/grids';
Vue.component(GridsGroup.name, GridsGroup);
Vue.component(GridsItem.name, GridsItem);
Vue.use(GridsGroup)
Vue.use(GridsItem)


import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.use(InfiniteScroll)

import {BackTop} from 'vue-ydui/dist/lib.rem/backtop';
Vue.component(BackTop.name, BackTop);
Vue.use(BackTop)


import {Badge} from 'vue-ydui/dist/lib.rem/badge';
Vue.component(Badge.name, Badge);
Vue.use(Badge)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
