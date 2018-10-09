<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info border-bottom" >
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            recommendList: [{
                id: '001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
                title: '广州必游TOP10',
                desc: '感受现代与传统相融合的广州'
            },{
                id: '002',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
                title: '签到广州长隆',
                desc: '来广州来长隆，就对了，就够了~'
            },{
                id: '003',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
                title: '自然户外好去处',
                desc: '快快来到户外，感受花城的魅力'
            },{
                id: '004',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ec/902725c4d56517.jpg_r_640x214_7a74d251.jpg',
                title: '羊城民俗风情游',
                desc: '品味羊城文化，感受羊城别样风情'
            },{
                id: '005',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/6f/bf9ef732f8ad2e.jpg_r_640x214_c759559e.jpg',
                title: '宝贝亲子游乐地',
                desc: '宝贝闲不住，我们去哪儿呀'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'

    
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
    
    .item
        margin-bottom: .2rem
        .item-img
            width: 100%

        .item-info
            padding: .1rem
            .item-title
                line-height: .54rem
                font-size: .34rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #666
                ellipsis()

</style>

