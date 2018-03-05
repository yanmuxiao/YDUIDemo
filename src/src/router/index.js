import Vue from 'vue'
import Router from 'vue-router'


import Guide from '@/views/guide.vue';
import Index from '@/views/index.vue';

import Button from '@/components/button.vue';
import Dialog from '@/components/dialog.vue';
import Cell from '@/components/cell.vue';
import Grids from '@/components/grids.vue';
import Icons from '@/components/icons.vue';
import List from '@/components/list.vue';
import ListTheme from '@/components/list.theme.vue';
import ListInfinitescroll from '@/components/list.infinitescroll.vue';
import ListPullRefresh from '@/components/list.pullrefresh.vue';
import listCombination from '@/components/list.combination.vue';
import Badge from '@/components/badge.vue';
import AsideBar from '@/components/asidebar.vue';
import TabBar from '@/components/tabbar.vue';
import NavBar from '@/components/navbar.vue';
import Tabs from '@/components/tabs.vue';
import Tab from '@/components/tab.vue';
import ScrollTab from '@/components/scrolltab.vue';
import ActionSheet from '@/components/actionsheet.vue';
import SendCode from '@/components/sendcode.vue';
import ProgressBar from '@/components/progressbar.vue';
import KeyBoard from '@/components/keyboard.vue';
import Slider from '@/components/slider.vue';
import Spinner from '@/components/spinner.vue';
import CitySelect from '@/components/cityselect.vue';
import CountDown from '@/components/countdown.vue';
import Rate from '@/components/rate.vue';
import Popup from '@/components/popup.vue';
import CountUp from '@/components/countup.vue';
import RollNotice from '@/components/rollnotice.vue';
import Input from '@/components/input.vue';
import FlexBox from '@/components/flexbox.vue';
import CR from '@/components/cr.vue';
import Switch from '@/components/switch.vue';
import Radio from '@/components/radio.vue';
import CheckBox from '@/components/checkbox.vue';
import BackTop from '@/components/backtop.vue';
import Accordion from '@/components/accordion.vue';
import DateTime from '@/components/datetime.vue';
import LightBox from '@/components/lightbox.vue';
import TimeLine from '@/components/timeline.vue';
import Step from '@/components/step.vue';
import CheckList from '@/components/checklist.vue';
import Search from '@/components/search.vue';
import ScrollNav from '@/components/scrollnav.vue';
import Preview from '@/components/preview.vue';



Vue.use(Router)


document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false);


export default new Router({
  routes: [
    {path: '/a', name: 'guide', component: Guide},
    {path: '/', name: 'index', component: Index},
    {path: '/index', name: 'index', component: Index},
    {path: '/button', name: 'button', component: Button},
    {path: '/dialog', name: 'dialog', component: Dialog},
    {path: '/cell', name: 'cell', component: Cell},
    {path: '/grids', name: 'grids', component: Grids},
    {path: '/icons', name: 'icons', component: Icons},
    {path: '/list', name: 'list', component: List},
    {path: '/list.theme/:id', name: 'list.theme/:id', component: ListTheme},
    {path: '/list.infinitescroll', name: 'list.infinitescroll', component: ListInfinitescroll},
    {path: '/list.pullrefresh', name: 'list.pullrefresh', component: ListPullRefresh},
    {path: '/list.combination', name: 'list.combination', component: listCombination},
    {path: '/badge', name: 'badge', component: Badge},
    {path: '/asidebar', name: 'asidebar', component: AsideBar},
    {path: '/tabbar', name: 'tabbar', component: TabBar},
    {path: '/navbar', name: 'navbar', component: NavBar},
    {path: '/tabs', name: 'tabs', component: Tabs},
    {path: '/tab', name: 'tab', component: Tab},
    {path: '/scrolltab', name: 'scrolltab', component: ScrollTab},
    {path: '/actionsheet', name: 'actionsheet', component: ActionSheet},
    {path: '/sendcode', name: 'sendcode', component: SendCode},
    {path: '/progressbar', name: 'progressbar', component: ProgressBar},
    {path: '/keyboard', name: 'keyboard', component: KeyBoard},
    {path: '/slider', name: 'slider', component: Slider},
    {path: '/spinner', name: 'spinner', component: Spinner},
    {path: '/cityselect', name: 'cityselect', component: CitySelect},
    {path: '/countdown', name: 'countdown', component: CountDown},
    {path: '/rate', name: 'rate', component: Rate},
    {path: '/popup', name: 'popup', component: Popup},
    {path: '/countup', name: 'countup', component: CountUp},
    {path: '/rollnotice', name: 'rollnotice', component: RollNotice},
    {path: '/input', name: 'input', component: Input},
    {path: '/flexbox', name: 'flexbox', component: FlexBox},
    {path: '/cr', name: 'C&R', component: CR},
    {path: '/switch', name: 'switch', component: Switch},
    {path: '/radio', name: 'radio', component: Radio},
    {path: '/checkbox', name: 'checkbox', component: CheckBox},
    {path: '/backtop', name: 'backtop', component: BackTop},
    {path: '/accordion', name: 'accordion', component: Accordion},
    {path: '/datetime', name: 'datetime', component: DateTime},
    {path: '/lightbox', name: 'lightbox', component: LightBox},
    {path: '/timeline', name: 'timeline', component: TimeLine},
    {path: '/step', name: 'step', component: Step},
    {path: '/checklist', name: 'checklist', component: CheckList},
    {path: '/search', name: 'search', component: Search},
    {path: '/scrollnav', name: 'scrollnav', component: ScrollNav},
    {path: '/preview', name: 'preview', component: Preview},
  ]
})
