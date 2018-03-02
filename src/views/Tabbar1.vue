<template>
	
	<div>

        <div class="searchFixed">
            <yd-search :style="'background-color: rgba(225,48,50,' + searchFixedOpacity + ')'" :result="result" fullpage v-model="searchValue" :itemClick="clickHandler" :on-submit="submitHandler" :on-cancel="cancelHandler"></yd-search>
        </div>

        <yd-slider autoplay="3000">
            <yd-slider-item v-for="carouselItem in carousel" :key="Math.random()">
                <a href="http://www.ydcss.com">
                    <img :src="carouselItem">
                </a>
            </yd-slider-item>
        </yd-slider>


        <yd-grids-group :rows="5">
            <yd-grids-item v-for="gridsImgItem in gridsIcon" :key="Math.random()">
                <img slot="icon" class="gridsImg" :src="gridsImgItem.src">
                <span slot="text">{{gridsImgItem.title}}</span>
            </yd-grids-item>
        </yd-grids-group>

        <yd-infinitescroll :callback="loadMoreList" ref="lsdemo">
	        <yd-list theme="3" slot="list">
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
	        <!-- 数据全部加载完毕显示 -->
	        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
	    </yd-infinitescroll>

    	<yd-backtop></yd-backtop>

	</div>

</template>

<script type="text/babel">
	
	export default {
        data() {
            return {
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
                concatList: [{
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
                }],

                carousel: [require('@/assets/coursel/coursel-01.jpg'),require('@/assets/coursel/coursel-02.jpg'),require('@/assets/coursel/coursel-03.jpg'),require('@/assets/coursel/coursel-04.jpg')],
                searchValue: '',
                result: [],


                gridsIcon: [{
                	title: '超市',
                	src: require('@/assets/gridsIcon/gridsIcon-01.png'),
                },{
                	title: '全球购',
                	src: require('@/assets/gridsIcon/gridsIcon-02.png'),
                },{
                	title: '服饰',
                	src: require('@/assets/gridsIcon/gridsIcon-03.png'),
                },{
                	title: '生鲜',
                	src: require('@/assets/gridsIcon/gridsIcon-04.png'),
                },{
                	title: '到家',
                	src: require('@/assets/gridsIcon/gridsIcon-05.png'),
                }],

                searchFixedOpacity: 0, // 滚动条滚动加深颜色
            }
        },
        mounted() {
            let _this = this;
            document.getElementById('scrollView').onscroll = function(e) {
                let searchFixedOpacity = e.target.scrollTop/100;
                _this.searchFixedOpacity = searchFixedOpacity;
            }
        },
        methods: {
        	loadMoreList() {
                setTimeout(()=>{
                	this.page++;
                	console.log(this.page)
                	this.list = this.list.concat(this.concatList)
                	if(this.page >= 3) {
	                    this.$refs.lsdemo.$emit('ydui.infinitescroll.loadedDone');
                	}else{
                		this.$refs.lsdemo.$emit('ydui.infinitescroll.finishLoad');
                	}
                	
                },3000)
            },

            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            clickHandler(item) {
                console.log(1)
                // this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                console.log(2)
                // this.$dialog.toast({mes: `搜索：${value}`});
            },
            cancelHandler() {
                console.log(3)
                // this.$dialog.toast({mes: '取消搜索回调'});
            }
        },
        watch: {
            searchValue(val) {
                this.result = this.getResult(val);
            }
        }
	}

</script>