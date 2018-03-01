<template>
    <yd-layout>
        <!-- <yd-navbar slot="navbar" :title="NavBar" bgcolor="#e50e09" color="#fff">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
            </router-link>
        </yd-navbar> -->
        <div v-show="activeTabbar === 'index'">
            <div></div>
            <yd-slider autoplay="3000">
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img :src="carousel[0]">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img :src="carousel[1]">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img :src="carousel[2]">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.ydcss.com">
                        <img :src="carousel[3]">
                    </a>
                </yd-slider-item>
            </yd-slider>
        </div>
        <!-- <div v-show="activeTabbar === 'shopcart'">
            <div>购物车shopcart</div>

        </div> -->
        <yd-pullrefresh v-show="activeTabbar === 'shopcart'" :callback="loadList" ref="pullrefreshDemo">

            <yd-list theme="4">
                <yd-list-item v-for="item, key in list" :key="key">
                    <img slot="img" :src="item.img">
                    <span slot="title">{{item.title}}</span>
                    <yd-list-other slot="other">
                        <div>
                            <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
                            <span class="list-del-price">¥{{item.productprice}}</span>
                        </div>
                        <div>content</div>
                    </yd-list-other>
                </yd-list-item>
            </yd-list>

        </yd-pullrefresh>
        <div v-show="activeTabbar === 'ucenter'">
            <yd-cell-group title="排版样式" class="demo-small-pitch">
                <yd-cell-item arrow type="link" href="/list.theme/1">
                    <span slot="left">theme1</span>
                </yd-cell-item>
                <yd-cell-item arrow type="link" href="/list.theme/2">
                    <span slot="left">theme2</span>
                </yd-cell-item>
                <yd-cell-item arrow type="link" href="/list.theme/3">
                    <span slot="left">theme3</span>
                </yd-cell-item>
                <yd-cell-item arrow type="link" href="/list.theme/4">
                    <span slot="left">theme4</span>
                </yd-cell-item>
                <yd-cell-item arrow type="link" href="/list.theme/5">
                    <span slot="left">theme5</span>
                </yd-cell-item>
            </yd-cell-group>
        </div>
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item @click.native="tabbarChange('index')" title="首页" link="#" :active="activeTabbar==='index'">
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item @click.native="tabbarChange('shopcart')" title="购物车" link="#" :active="activeTabbar==='shopcart'">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item @click.native="tabbarChange('ucenter')" title="个人中心" link="#" :active="activeTabbar==='ucenter'">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>

    </yd-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                activeTabbar: 'index',
                NavBar: 'index',

                page: 1,
                list: [
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                        title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ],

                carousel: [require('@/assets/coursel/coursel-01.jpg'),require('@/assets/coursel/coursel-02.jpg'),require('@/assets/coursel/coursel-03.jpg'),require('@/assets/coursel/coursel-04.jpg')]

            }
        },
        methods: {
            tabbarChange(activeTabbar) {
                if(this.activeTabbar === activeTabbar) {
                    return;
                }
                this.NavBar = activeTabbar;
                this.activeTabbar = activeTabbar;
            },
            loadList() {
                setTimeout(()=>{
                    this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
                },3000)
            }
        }
    }
</script>
