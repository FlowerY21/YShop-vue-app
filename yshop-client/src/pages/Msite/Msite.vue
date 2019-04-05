<template>
  <section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop :title="address.name">
      <router-link slot="left" class="header_search" to="/search">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link slot="right" class="header_login" :to="userInfo._id ? '/profile':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else><i class="iconfont icon-yonghu"></i></span>
      </router-link>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysList" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index2) in categorys" :key="index2">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default ({
    data(){
      return{
        baseImgUrl:'https://fuss10.elemecdn.com'
      }
    },
    components:{
      HeaderTop,
      ShopList
    },
    mounted(){
      // 请求食物分类列表
      this.$store.dispatch('getFoodCategorys');
      this.$store.dispatch('getShopList');
    },
    computed:{
      ...mapState(['address','categorys','userInfo']),
      categorysList(){
        const {categorys} = this;
        let arr = [];
        let minArr = [];
        categorys.forEach((c)=>{
          if(minArr.length == 0){
            arr.push(minArr)
          };
          minArr.push(c);
          if(minArr.length == 8){
            minArr = [];
          };
        });
        return arr;
      }
    },
    watch:{
      categorys(value){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })
        })
      },
    }
  })
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
