<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-black">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-black">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1: opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {    // 解绑全局事件
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        text-align: center
        background: rgba(0, 0, 0, .8)
        .header-abs-black
            color: #fff
            font-size: .4rem
    
    .header-fixed
        z-index: 2
        position: fixed
        top: 0
        left: 0
        right: 0
        overflow: hidden
        height: $HeaderHeight
        line-height: $HeaderHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem
        .header-fixed-black
            position: absolute
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>
