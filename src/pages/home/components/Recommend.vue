<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info border-bottom" >
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
    // data () {
    //     return {
    //         recommendList: [{
    //             id: '001',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
    //             title: '长隆野生动物世界',
    //             desc: '野生动物世界考拉园'
    //         },{
    //             id: '002',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/a0/a021cde25761c0aa3.img.jpg_200x200_7635f5ba.jpg',
    //             title: '长隆欢乐世界',
    //             desc: '体会高声尖笑，挑战你的青春荷尔蒙，唤醒你的冒险细胞。'
    //         },{
    //             id: '003',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/71/71daa558cbccbb92a3.img.jpg_200x200_133f9dec.jpg',
    //             title: '长隆国际大马戏剧院',
    //             desc: '魔幻开启：咚咚咚”小女孩在一阵敲门声中惊醒，眼前天空一片星海。'
    //         },{
    //             id: '004',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/ab/abb70c851caaa6d8a3.img.jpg_200x200_b902dd9e.jpg',
    //             title: '长隆水上乐园',
    //             desc: '哇~和粑粑麻麻一起到水上乐园来消暑，好开心！！！'
    //         },{
    //             id: '005',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/1c/1c67791edbe2677b90.img.jpg_200x200_ff903759.jpg',
    //             title: '珠江夜游',
    //             desc: '完备的高保真音响配置，使尊贵的你在游览珠江两岸风情的同时，听觉上也可大大的享受'
    //         },{
    //             id: '006',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
    //             title: '广州长隆旅游度假区',
    //             desc: '长隆国际大马戏拥有全球首创实景式马戏舞台，为你打造令人惊叹的视听盛宴。'
    //         },{
    //             id: '007',
    //             imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/3d/3dc7f222d6bca6a790.img.jpg_200x200_e0bb3017.jpg',
    //             title: '广州花城汇MAG环球魔幻世界',
    //             desc: '3D夜光森林——“MAG夜光森林”，全馆作品均运用超逼真3D错位绘画技术，融合现代夜光透视手法魔幻呈现。'
    //         }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'

    
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    
    .item
        display: flex
        overflow: hidden
        height: 1.9rem

        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem

        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
            .item-title
                line-height: .54rem
                font-size: .34rem
                ellipsis()
            .item-desc
                line-height: .4rem
                color: #999
                ellipsis()
            .item-button
                margin-top: .16rem
                line-height: .44rem
                background: #ff9300
                padding: 0 .1rem
                border-radius: .06rem
</style>

