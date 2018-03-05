// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.use(Button)
Vue.use(ButtonGroup)

import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
Vue.use(CellGroup)
Vue.use(CellItem)

import {Icons} from 'vue-ydui/dist/lib.rem/icons';
Vue.component(Icons.name, Icons);
Vue.use(Icons)

import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);
Vue.use(ListTheme)
Vue.use(ListItem)
Vue.use(ListOther)

import {Badge} from 'vue-ydui/dist/lib.rem/badge';
Vue.component(Badge.name, Badge);
Vue.use(Badge)


import { GridsGroup, GridsItem } from 'vue-ydui/dist/lib.rem/grids';
Vue.component(GridsGroup.name, GridsGroup);
Vue.component(GridsItem.name, GridsItem);
Vue.use(GridsGroup)
Vue.use(GridsItem)


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



import 'vue-ydui/dist/ydui.base.css';
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
Vue.component(Layout.name, Layout);
Vue.use(Layout)

import {TextArea} from 'vue-ydui/dist/lib.rem/textarea';
Vue.component(TextArea.name, TextArea);
Vue.use(TextArea)


import {Input} from 'vue-ydui/dist/lib.rem/input';
Vue.component(Input.name, Input);
Vue.use(Input)

import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox';
Vue.component(FlexBox.name, FlexBox);
Vue.component(FlexBoxItem.name, FlexBoxItem);
Vue.use(FlexBox)
Vue.use(FlexBoxItem)


import {Switch} from 'vue-ydui/dist/lib.rem/switch';
Vue.component(Switch.name, Switch);
Vue.use(Switch)


import {Radio, RadioGroup} from 'vue-ydui/dist/lib.rem/radio';
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.use(Radio)
Vue.use(RadioGroup)









import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';
Vue.component(CheckBox.name, CheckBox);
Vue.component(CheckBoxGroup.name, CheckBoxGroup);
Vue.use(CheckBox)
Vue.use(CheckBoxGroup)


import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline';
Vue.component(TimeLine.name, TimeLine);
Vue.component(TimeLineItem.name, TimeLineItem);
Vue.use(TimeLine)
Vue.use(TimeLineItem)


import {Step, StepItem} from 'vue-ydui/dist/lib.rem/step';
Vue.component(Step.name, Step);
Vue.component(StepItem.name, StepItem);
Vue.use(Step)
Vue.use(StepItem)


import {Preview, PreviewHeader, PreviewItem} from 'vue-ydui/dist/lib.rem/preview';
Vue.component(Preview.name, Preview);
Vue.component(PreviewHeader.name, PreviewHeader);
Vue.component(PreviewItem.name, PreviewItem);
Vue.use(Preview)
Vue.use(PreviewHeader)
Vue.use(PreviewItem)



import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};


import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
Vue.use(Slider)
Vue.use(SliderItem)


import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar';
Vue.component(ProgressBar.name, ProgressBar);
Vue.use(ProgressBar)

import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';
Vue.component(ActionSheet.name, ActionSheet);
Vue.use(ActionSheet)


import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab';
Vue.component(Tab.name, Tab);
Vue.component(TabPanel.name, TabPanel);
Vue.use(Tab)
Vue.use(TabPanel)


import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.rem/scrolltab';
Vue.component(ScrollTab.name, ScrollTab);
Vue.component(ScrollTabPanel.name, ScrollTabPanel);
Vue.use(ScrollTab)
Vue.use(ScrollTabPanel)


import {KeyBoard} from 'vue-ydui/dist/lib.rem/keyboard';
Vue.component(KeyBoard.name, KeyBoard);
Vue.use(KeyBoard)


import {Spinner} from 'vue-ydui/dist/lib.rem/spinner';
Vue.component(Spinner.name, Spinner);
Vue.use(Spinner)


import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
Vue.component(SendCode.name, SendCode);
Vue.use(SendCode)


import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);
Vue.use(CitySelect)


import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll';
Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.use(InfiniteScroll)


import {PullRefresh} from 'vue-ydui/dist/lib.rem/pullrefresh';
Vue.component(PullRefresh.name, PullRefresh);
Vue.use(PullRefresh)



import {CountUp} from 'vue-ydui/dist/lib.rem/countup';
Vue.component(CountUp.name, CountUp);
Vue.use(CountUp)


import {CountDown} from 'vue-ydui/dist/lib.rem/countdown';
Vue.component(CountDown.name, CountDown);
Vue.use(CountDown)


import {Rate} from 'vue-ydui/dist/lib.rem/rate';
Vue.component(Rate.name, Rate);
Vue.use(Rate)


import {Popup} from 'vue-ydui/dist/lib.rem/popup';
Vue.component(Popup.name, Popup);
Vue.use(Popup)



import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice';
Vue.component(RollNotice.name, RollNotice);
Vue.component(RollNoticeItem.name, RollNoticeItem);
Vue.use(RollNotice)
Vue.use(RollNoticeItem)


import {BackTop} from 'vue-ydui/dist/lib.rem/backtop';
Vue.component(BackTop.name, BackTop);
Vue.use(BackTop)


import {Accordion, AccordionItem} from 'vue-ydui/dist/lib.rem/accordion';
Vue.component(Accordion.name, Accordion);
Vue.component(AccordionItem.name, AccordionItem);
Vue.use(Accordion)
Vue.use(AccordionItem)


import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
Vue.component(DateTime.name, DateTime);
Vue.use(DateTime)


import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox';
Vue.component(LightBox.name, LightBox);
Vue.component(LightBoxImg.name, LightBoxImg);
Vue.component(LightBoxTxt.name, LightBoxTxt);
Vue.use(LightBox)
Vue.use(LightBoxImg)
Vue.use(LightBoxTxt)


import {CheckList, CheckListItem} from 'vue-ydui/dist/lib.rem/checklist';
Vue.component(CheckList.name, CheckList);
Vue.component(CheckListItem.name, CheckListItem);
Vue.use(CheckList)
Vue.use(CheckListItem)


import {Search} from 'vue-ydui/dist/lib.rem/search';
Vue.component(Search.name, Search);
Vue.use(Search)


import {ScrollNav, ScrollNavPanel} from 'vue-ydui/dist/lib.rem/scrollnav';
Vue.component(ScrollNav.name, ScrollNav);
Vue.component(ScrollNavPanel.name, ScrollNavPanel);
Vue.use(ScrollNav)
Vue.use(ScrollNavPanel)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
