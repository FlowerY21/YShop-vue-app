<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(starClass,index) in starClasses" :key="index" :class="starClass"></span>
  </div>
</template>

<script>

  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default({
    props:{
      size:Number,
      score:Number
    },
    computed:{
      starClasses(){
        const {score} = this;
        const classArr = [];
        const classOn = Math.floor(score);
        const classHalf = score * 10 - classOn * 10;
        for(let i =0; i<classOn;i++ ){
          classArr.push(CLASS_ON)
        }
        if(classHalf >= 5){
          classArr.push(CLASS_HALF)
        }
        if(classArr.length <5){
          classArr.push(CLASS_OFF)
        }
        return classArr;
      }
    }
  })
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
