<template>
    <div class="guide">
        <img :src="guideImg" class="guideImg" alt="" @click="guideToIndex">
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                guideImg: require('@/assets/start/1.jpg')
            }
        },
        methods: {
            guideToIndex() {
                this.$router.replace('/index');
            }
        }
    }
</script>
<style type="text/css" scoped="">
    
    .guide {
        width: 100%;
        height: 100%;
    }
    .guideImg {
        width: 100%;
    }

</style>
