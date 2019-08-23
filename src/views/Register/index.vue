<template>
  <div class="register">
    <header>
      <h1>注册</h1>
      <span class="iconfont icon-zuojiantou back" @click="iconfont"></span>
      <a class="enroll" @click="enroll">登录</a>
    </header>
    <div class="con">
      <form class="former">
        <div class="form_item" :class="{active:act_index===1}">
          <input
            id="phone"
            type="tel"
            placeholder="手机号"
            class="text"
            v-model=" username"
            @focus="act_index=1"
            ref="ipt"
            @change="checkphone"
          />
        </div>
        <span :class="explain">{{msgphone}}</span>
        <div class="form_item" :class="{active:act_index===2}">
          <input
            :type="pwdType"
            placeholder="密码"
            class="text"
            v-model="password"
            @focus="act_index=2"
            ref="pwd"
          />
          <em class="iconfont" :class="iconft" @click="iconfot"></em>
        </div>
        <div class="form_item" :class="{active:act_index===3}">
          <input
            :type="pdType"
            placeholder="请确认密码"
            class="text"
            @focus="act_index=3"
            ref="pwd2"
            v-model="password2"
          />
          <em class="iconfont" :class="icnft" @click="icnfot"></em>
        </div>
        <div class="form-btn">
          <input type="submit" value="立即注册" class="submit" @click="isRegister" />
        </div>
      </form>
    </div>
    <footer class="footer">
      <div class="reg_txt">您可以使用该帐号登录咪咕音乐、咪咕视频、咪咕阅读、咪咕游戏、咪咕圈圈等业务。中国移动用户已默认注册和通行证帐号，可直接登录咪咕业务。</div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      act_index: 1,
      username: '',
      password: '',
      password2: '',
      pwdType: 'password', // 输入的密码类型
      iconft: 'icon-mimayincang', // 隐藏时显示的图片
      pdType: 'password', // 确认密码时的类型
      icnft: 'icon-mimayincang', // 确认密码时隐藏的显示图片
      msgphone: '', // 手机验证信息
      explain: 'display:block'
    }
  },
  methods: {
    isRegister () {
      let username = this.$refs.ipt.value
      let password = this.$refs.pwd.value
      let password2 = this.$refs.pwd2.value
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      let _this = this
      if (!username || !password || !password2) {
        alert('请输入相关信息')
        return
      }
      if (this.username == '') {
        this.msgphone = '手机号不能为空！'
      }
      if (!myreg.test(this.username)) {
        this.msgphone = '请输入有效的手机号码！'
      } else {
        if (password === password2) {
          axios
            .post('http://localhost:3000/api/sign-up', {
              username,
              password
            })
            .then(function (res) {
              _this.$toast({
                message: '注册成功'
              })
              _this.$router.replace({
                path: '/login'
              })
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          _this.$toast({
            message: '两次输入密码不一致'
          })
        }
      }
    },
    checkphone: function () {
      let username = this.$refs.ipt.value
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (this.username == '') {
        this.msgphone = '手机号不能为空！'
        this.explain =
          this.explain == 'display:block' ? 'display:block' : 'display:none'
      } else if (!myreg.test(this.username)) {
        this.msgphone = '请输入有效的手机号码！'
      } else {
        this.msgphone = ''
      }
    },
    enroll () {
      this.$router.push({
        path: 'login'
      })
    },
    iconfont () {
      this.$router.push({
        path: 'login'
      })
    },
    iconfot () {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
      this.iconft =
        this.iconft == 'icon-mimayincang'
          ? 'icon-mimaxianshi'
          : 'icon-mimayincang'
    },
    icnfot () {
      this.pdType = this.pdType === 'password' ? 'text' : 'password'
      this.icnft =
        this.icnft == 'icon-mimayincang'
          ? 'icon-mimaxianshi'
          : 'icon-mimayincang'
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/style/common/mixin.scss';
.register {
  max-width: 480px;
  margin: 0 auto;
  header {
    position: fixed;
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
    height: 543px;
    padding-top: 1px;
    .former {
      margin-top: 0.625rem;
      padding: 0 1rem;
      .active {
        border-bottom: 1px solid #2e8fd7;
      }
      span {
        color: red;
        font-size: 1rem;
      }
    }
    .form_item {
      padding: 0 0.625rem;
      line-height: 3.125rem;
      border-bottom: 1px solid #dbdddf;
      margin-bottom: 0.275rem;
      position: relative;
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

      .text {
        width: 100%;
        height: 1.5rem;
        border: none;
        font-size: 1rem;
        line-height: 1.5;
        padding: 0.8125rem 0;
        color: #31363e;
      }
    }
    .form-btn {
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
  .footer {
    position: static;
    left: auto;
    bottom: auto;
    text-align: center;
    width: 100%;
    .reg_txt {
      font-size: 0.875rem;
      color: #b0b3b5;
      line-height: 1.5;
      padding: 0 1rem 1rem;
      text-align: left;
    }
  }
}
</style>
