<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header"><h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginClass}" @click="loginWay()">短信登录</a>
          <a href="javascript:;" :class="{on:!loginClass}" @click="loginWay()">密码登录</a></div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:loginClass}">
            <section class="login_message"><input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click="getPhoneCode()">
                {{countDown > 0 ? `已发送（${countDown}）s`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification"><input type="tel" maxlength="8" placeholder="验证码" v-model="code"></section>
            <section class="login_hint"> 温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意 <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!loginClass}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input v-if="!pwdShow" type="tel" maxlength="8" placeholder="密码" v-model="pwd">
                <input v-else type="password" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="pwdShow ? 'off':'on'" @click="switchButton()">
                  <div class="switch_circle" :class="{right:!pwdShow}"></div>
                  <span class="switch_text">{{pwdShow ? '...':'abc'}}</span></div>
              </section>
              <section class="login_message"><input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha()" ref="captcha"></section>
            </section>
          </div>
          <button class="login_submit"@click="login()">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip()" />
  </div>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip'
import {reqSendCode , reqLoginSms , reqLoginPwd} from '../../api'
export default {
  data(){
    return{
      loginClass:true,
      countDown:0,
      pwdShow:true,
      phone:'',   //  电话号码
      code:'',    //  短信验证码
      name:'',    //  用户名
      pwd:'',     //  密码
      captcha:'', //  图形验证码
      alertText:'',
      alertShow:false,
    }
  },
  methods:{
    // 登录方式
    loginWay(){
      this.loginClass = !this.loginClass;
    },
    // 获取短信验证码
    async getPhoneCode(){
      // 倒计时
      if(this.countDown == 0){
        this.countDown = 60;
        this.intervalId = setInterval(()=>{
          this.countDown--;
          if(this.countDown <= 0){
            clearInterval(this.intervalId)
          }
        },1000);

        // 发送验证码
        const result = await reqSendCode(this.phone);
        if(result.code == 1){
          this.showAlert(result.msg)  //错误信息提示
          if(this.countDown){ //  清除定时器
            this.countDown = 0;
            clearInterval(this.intervalId);
          }
        }
      }
    },
    // 密码切换按钮
    switchButton(){
      this.pwdShow = !this.pwdShow;
    },
    // 显示弹窗
    showAlert(text){
      this.alertText = text;
      this.alertShow = true;
    },
    // 登录
    async login(){
      let result;
      if(this.loginClass){  //  短信登录
        const {rightPhone , phone , code} = this;
        if(!rightPhone){
          this.showAlert('电话格式不正确');
        }else if(!/^\d{6}$/.test(code)){
          this.showAlert('请输入验证码')
        }
        result = await reqLoginSms(phone,code);
      }else{  //  密码登录
        const {name , pwd , captcha} = this;
        if(!this.name){
          this.showAlert('用户名必须指定')
        }else if(!this.pwd){
          this.showAlert('密码不能为空')
        }else if(!this.captcha){
          this.showAlert('请输入验证码')
        }
        result = await reqLoginPwd({name , pwd , captcha});
      }

      if(result.code == 0){
        // 登录成功跳转
        alert(1)
        const userInfo = result.data;
        this.$router.replace('/profile');
        // 存储用户信息
        this.$store.dispatch('recordUser',userInfo)
      }else{
        alert(2)
        this.getCaptcha();  //获取图形验证码
        this.showAlert(result.msg)
      }

    },
    // 关闭弹窗
    closeTip(){
      this.alertShow = false;
      this.alertText = '';
    },
    // 获取图形验证码
    getCaptcha(){
      this.$refs.captcha.src = "http://localhost:4000/captcha?time="+ Date.now();
    }
  },
  computed:{
    rightPhone(){
      return /^1[34578]\d{9}$/.test(this.phone)
    }
  },
  components:{
    AlertTip
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
