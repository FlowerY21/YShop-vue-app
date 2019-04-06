<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.footerShow" />
  </div>

</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default ({
    components:{
      FooterGuide
    },
    mounted(){
      this.$store.dispatch('getAddress');
      this.$store.dispatch('getUserInfo');
    },
  })
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
