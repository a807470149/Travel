<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div> 
</template>

<script>
export default {
    name: 'HomeSwiper',
    props:{
        list: Array
    },
    data () {
        return{
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true, // 让图片支持循环轮播
                autoplay: 3000, // 轮播图3秒切换
                autoplayDisableOnInteraction: false, // 解决swiper手动改滑动之后，不再自动滑动问题
            },
            // swiperList: [{
            //     id: '001',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/2a/c58ac6dcadd7d502.jpg_750x200_660cb194.jpg'
            // },{
            //     id: '002',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
            // },{
            //     id: '003',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
            // },{
            //     id: '004',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/eb/5cacf42b59e91e02.jpg_750x200_9c0a77b0.jpg'
            // }]
        }
    },
    computed: {
        // 解决刷新页面轮播图显示最后一页问题
        showSwiper () {
            return this.list.length
        }
        
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff !important
        
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 25%
        background: #eee
        .swiper-img
            width: 100%
</style>

