<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont black-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right" >
                 {{ this.city }}
                <span class="iconfont arrow">&#xe64a;</span>
            </div>
        </router-link>  
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState (['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    .header
        // 弹性布局
        display: flex   
        line-height: $HeaderHeight
        background: $bgColor
        color: #ffffff

        .header-left
            width: .64rem
            float: left
            .black-icon
                text-align: center
                font-size: .4rem

        .header-input
            // 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
            flex: 1
            background: #ffffff
            height: .62rem
            line-height: .62rem
            border-radius: .1rem
            margin-top: .12rem
            margin-left: .2rem 
            padding-left: .2rem
            color: #ccc

        .header-right
            color: #fff
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            .arrow
                font-size: .24rem
                margin-left: -.04rem
</style>

