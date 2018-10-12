<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_600x330_26145653.jpg">
            <div class="banner-info">
                <div class="banner-title">
                    长隆野生动物世界(AAAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe616;</span>
                    103
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs="imgs" 
        v-show="showGallary"
        @close="handleCallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '@/pages/common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1810/2d/2d7b45e94187416ea3.img.jpg_r_800x800_39d8c7f2.jpg','http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg']
        }
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleCallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55% 

        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

            .banner-title
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem

                .banner-icon
                    font-size: .24rem
</style>
