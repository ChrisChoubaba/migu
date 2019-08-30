<template>
  <div class="login">
    <header>
      <h1>登录</h1>
      <span class="iconfont icon-zuojiantou back" @click="iconfont"></span>
      <a class="enroll" @click="enroll">注册</a>
    </header>
    <div class="con">
      <div class="logo"></div>
      <!-- 登录框 -->
      <div class="former" @submit.prevent="login">
        <div class="form_item" :class="{active:act_index===1}">
          <input
            type="tel"
            placeholder="手机号/邮箱/用户名"
            class="text"
            v-model="loginForm.username"
            ref="ipt"
            @focus="act_index=1"
          />
        </div>
        <div class="form_item" :class="{active:act_index===2}">
          <input
            :type="pwdType"
            placeholder="密码"
            class="text"
            ref="pwd"
            v-model="loginForm.password"
            @focus="act_index=2"
          />
          <em class="iconfont" :class="iconft" @click="iconfot"></em>
        </div>
        <!-- 登录按钮 -->
        <div class="form_btn">
          <input type="submit" value="登录" class="submit" @click="goLogin" />
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="link_wrap">
        <a>短信登录</a>
        <span></span>
        <a>忘记密码</a>
      </div>
      <div class="thirty-party">
        <a
          class="hpass"
          href="https://passport.migu.cn/andPassLogin?sourceid=203004&appType=0&relayState=login&callbackURL=http%3A%2F%2Fmovie.miguvideo.com%2Flovev%2FmiguMovie%2FpersonCenter%2Fmine%2Fmine.jsp"
        ></a>
      </div>
    </footer>
  </div>
</template>

<script>
// window.isLogin = false //登录状态
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      // local: 'false',
      ifDisplay: 'false',
      act_index: 1,
      // username: '', //账号的value
      // password: '', //密码
      dataes: [],
      pwdType: 'password', // 输入的密码类型
      iconft: 'icon-mimayincang', // 隐藏时显示的图片
      // text: '', //账号的value
      // password: '' ,//密码
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations('login', ['changeToken', 'changeUserName']),
    //   console.log(this.text)
    //   console.log(this.password)
    // },
    enroll () {
      this.$router.push({
        path: 'register'
      })
    },
    iconfont () {
      this.$router.push({
        path: 'personCenter'
      })
    },
    iconfot () {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
      this.iconft =
        this.iconft == 'icon-mimayincang'
          ? 'icon-mimaxianshi'
          : 'icon-mimayincang'
    },
    goLogin () {
      let _this = this
      // console.log();
      console.log(555);
      
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/sign-in',
          data: _this.loginForm
        })
          .then(res => {
            console.log(res)
            // -------------------获取账户名和令牌------
            _this.userToken = res.data.data.token
            _this.user = res.data.data.userInfo.username
            // console.log(_this.user );
            // console.log(_this.userToken );
            // 将token和账号保存在sessionStorage里面
            sessionStorage.setItem('Authorization', _this.userToken)
            sessionStorage.setItem('userName', _this.user)
            _this.token = sessionStorage.getItem('Authorization')
            _this.userName = sessionStorage.getItem('userName')

            _this.changeToken({ Authorization: _this.token })
            _this.changeUserName({ userName: _this.userName })
            // 使用Toast组件实现轻提示
            _this.$toast({
              message: '登录成功'
            })
            let toPath = _this.$route.query.redirect || '/personCenter'
            _this.$router.replace(toPath)
          })
          .catch(error => {
            // alert('账号或密码错误');
            // console.log(error);
            _this.$toast({
              message: '账号或密码错误'
            })
          })
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/common/mixin.scss';
.login {
  max-width: 480px;
  margin: 0 auto;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    z-index: 9999;
    h1 {
      text-align: center;
      font-size: 1.125rem;
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 3.125rem;
      height: 2.75rem;
      cursor: pointer;
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.5);
      text-align: center;
    }
    .enroll {
      position: absolute;
      top: 0;
      right: 0;
      line-height: 2.75rem;
      font-size: 0.9375rem;
      padding: 0 1rem;
    }
    @include border-bottom;
  }
  .con {
    height: 526px;
    padding-top: 1px;
    .logo {
      margin: 1.875rem auto;
      width: 8.625rem;
      height: 2.215rem;
      background: url('../../assets/images/migu-video.png') no-repeat center
        center;
      background-size: 100% 100%;
    }
    .former {
      margin-top: 0.625rem;
      padding: 0 1rem;
      .form_item {
        position: relative;
        font-size: 1rem;
        padding: 0 0.625rem;
        line-height: 3.125rem;
        border-bottom: 1px solid #dbdddf;
        margin-bottom: 0.275rem;
        .text {
          width: 100%;
          height: 1.5rem;
          border: none;
          line-height: 1.5;
          padding: 0.8125rem 0;
          color: #31363e;
        }
      }
      .active {
        border-bottom: 1px solid #2e8fd7;
      }
      em {
        margin-top: 13px;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5;
        top: 0;
        right: 0;
        color: rgba(0, 0, 0, 0.25);
      }
      .form_btn {
        margin-top: 1.875rem;
        text-align: center;
        .submit {
          width: 100%;
          background-color: #2e8fd7;
          border: none;
          line-height: 2.75rem;
          font-size: 1.125rem;
          color: #fff;
          border-radius: 1.4rem;
        }
      }
    }
  }
  .footer {
    position: static;
    left: auto;
    bottom: auto;
    text-align: center;
    .link_wrap {
      font-size: 0.9375rem;
      line-height: 1rem;
      padding-bottom: 2rem;
      a {
        display: inline-block;
        vertical-align: middle;
        color: #2e8fd7;
      }
      span {
        border-left: 1px solid #2e8fd7;
        display: inline-block;
        width: 0;
        margin: 0 0.375rem;
        vertical-align: middle;
        height: 1rem;
      }
    }
    .thirty-party {
      padding-bottom: 1rem;
      a {
        display: inline-block;
        width: 1.875rem;
        height: 1.875rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        margin: 0 8%；;
      }
      .hpass {
        background: url('../../assets/images/icon-pass.png');
      }
    }
  }
}
</style>
