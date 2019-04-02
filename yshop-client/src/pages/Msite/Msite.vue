<template>
  <section class="msite">
    <!--首页头部title-->
    <!--由msite_header改成header-->
    <HeaderTop title="西湖小区">
      <span slot="left" class="header_search">
        <i class="iconfont icon-search"></i>
      </span>
      <span slot="right" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航轮播-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>甜品饮品</span>
            </a>

            <!--下面的图片省略-->
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
        <!-- 轮播图页码 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家列表-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px">
            <a>
              <div class="shop_left">
                <img class="shop_img" src="./images/shop/1.jpg">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports">保</li>
                    <li class="supports">准</li>
                    <li class="supports">票</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <Star></Star>
                    <div class="rating_section">
                      3.6
                    </div>
                    <div class="order_section">
                      月售106单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_right">硅谷专送</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥20起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥5</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
          <!--省略其他店铺展示-->
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import Star from '../../components/Star/Star'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default ({
    components:{
      HeaderTop,
      Star
    },
    mounted(){
      new Swiper('.swiper-container', {
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
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
      .shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    color #666
                  .segmentation
                    color #ccc
</style>
