<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc"> {{ item.desc }}</p> 
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    neme: 'HomeIcons',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: { // 解决自动轮播问题
                autoplay: false
            }
    //         iconList: [{
    //             swiperOption: {
    //                 pagination: '.swiper-pagination',
    //             },
    //             id: '001',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
    //             desc: '景点门票'
    //         },{
    //             id: '002',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
    //             desc: '广州必游'
    //         },{
    //             id: '003',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
    //             desc: '动植物园'
    //         },{
    //             id: '004',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
    //             desc: '游乐场'
    //         },{
    //             id: '005',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
    //             desc: '两江夜游'
    //         },{
    //             id: '006',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
    //             desc: '水上乐园'
    //         },{
    //             id: '007',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
    //             desc: '一日游'
    //         },{
    //             id: '008',
    //             imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
    //             desc: '打卡圣地'
    //         },{
    //             id: '009',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
    //             desc: '玩转长隆'
    //         },{
    //             id: '010',
    //             imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
    //             desc: '全部玩乐'
    //         }]
        }
    },
    computed:{  // 将数组拆分成一个二维数组
        pages () {
            const pages = []
            this.list.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'

   .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
        
    .icon
        position: relative
        overflow: hidden
        float: left 
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
            
</style>

