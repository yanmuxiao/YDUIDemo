<template>
    <yd-layout>
        <yd-navbar  v-show="activeTabbar !== 'index'" slot="navbar" :title="NavBar" bgcolor="#e50e09" color="#fff">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
            </router-link>
        </yd-navbar>
        
        <Tabbar1 v-show="activeTabbar === 'index'"></Tabbar1>
        <Tabbar2 v-show="activeTabbar === 'shopcart'"></Tabbar2>
        <Tabbar3 v-show="activeTabbar === 'message'"></Tabbar3>
        <Tabbar4 v-show="activeTabbar === 'ucenter'"></Tabbar4>
        
        <yd-tabbar slot="tabbar">
            <yd-tabbar-item @click.native="tabbarChange('index')" title="首页" link="#" :active="activeTabbar==='index'">
                <yd-icon name="home" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item @click.native="tabbarChange('shopcart')" title="赚钱" link="#" :active="activeTabbar==='shopcart'">
                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
            <yd-tabbar-item @click.native="tabbarChange('message')" title="消息" link="#" :active="activeTabbar==='message'">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
                <yd-badge slot="badge" type="danger">2</yd-badge>
            </yd-tabbar-item>
            <yd-tabbar-item @click.native="tabbarChange('ucenter')" title="个人中心" link="#" :active="activeTabbar==='ucenter'">
                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
            </yd-tabbar-item>
        </yd-tabbar>

    </yd-layout>
</template>

<script type="text/babel">
    import Tabbar1 from '@/views/Tabbar1'
    import Tabbar2 from '@/views/Tabbar2'
    import Tabbar3 from '@/views/Tabbar3'
    import Tabbar4 from '@/views/Tabbar4'

    export default {
        data() {
            return {
                activeTabbar: 'index',
                NavBar: 'index',
            }
        },
        mounted() {
        },
        methods: {
            tabbarChange(activeTabbar) {
                if(this.activeTabbar === activeTabbar) {
                    return;
                }
                this.NavBar = activeTabbar;
                this.activeTabbar = activeTabbar;
            },
        },
        watch: {
        },
        components: {
            Tabbar1, Tabbar2, Tabbar3, Tabbar4
        }
    }
</script>

<style type="text/css">
    .searchFixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 4;
    }
    .searchFixed .yd-search-input {
        background-color: rgba(0,0,0,0);
    }
    .searchFixed .yd-search-input:before,
    .searchFixed .yd-search-input:after {
        display: none;
    }
    .searchFixed .yd-search-fly .yd-search-input {
        background-color: #efeff4;
    }
</style>

