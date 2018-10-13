<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont header-black">&#xe624;</div>
        </router-link>  
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
     @import '~@/assets/styles/varibles.styl'

     .header
        position: relative
        overflow: hidden
        height: $HeaderHeight
        line-height: $HeaderHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem

        .header-black
            position: absolute
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff
</style>

