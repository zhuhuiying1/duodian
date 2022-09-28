<template>
  <div class="login-page">
    <h2>手机号登录</h2>
    <p>没注册用户自动注册</p>
    <div class="phone">
      <input type="text" placeholder="请输入手机号" v-model="phoneVal">
      <button :disabled="isVerify" class="verify-btn" @click="getVerify">{{timer > 0 ? `${timer}秒后再试` : '获取验证码'}}</button>
    </div>
    <div class="verify">
      <input type="text" placeholder="请输入验证码" v-model="verifyVal">
    </div>
    <button :disabled="isLoginVerify" class="login-btn" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      phoneVal: '',
      verifyVal: '',
      timer: 0
    }
  },
  computed: {
    // 获取验证码是否禁用,获取后60秒内禁用,手机号不是11位数禁用
    isVerify () {
      return this.timer > 0 || this.phoneVal.length !== 11
    },
    // 登录按钮是否禁用,手机号不是11位禁用,验证码不是6位禁用
    isLoginVerify () {
      return this.phoneVal.length !== 11 || this.verifyVal.length !== 6
    }
  },
  methods: {
    // 获取验证码事件
    async getVerify () {
      const res = await this.$api.user.verify({
        phone: this.phoneVal
      })
      console.log(res)
      // 获取完验证码60秒后才可以获取
      this.timer = 60
      const interval = setInterval(() => {
        this.timer -= 1
        if (this.timer <= 0) {
          clearInterval(interval)
        }
      }, 100)
    },
    // 登录事件
    async login () {
      const res = await this.$api.user.login({
        phone: this.phoneVal,
        verify: this.verifyVal
      })
      // 登陆成功的下一步
      // 好像不成功就执行不到这一步
      const path = this.$route.query.callbackPath || '/home'
      // 本地存储token
      localStorage.setItem('verify', res.token)
      // 触发vuex的获取用户数据
      // 因为vuex store的actions方法是异步的,所以有.then方法
      this.$store.dispatch('user/getUserInfo').then((res) => {
        this.$router.replace(path)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  @include wh(100vw, 100vh);
  padding: 0 52px;
  box-sizing: border-box;
  h2 {
    @include wh(auto,auto);
    font-size: 64px;
    padding-top: 49px;
    margin-bottom: 23px;
  }
  p {
    @include wh(auto,auto);
    font-size: 30px;
    margin-bottom: 70px;
  }
  input {
    background: transparent;
    outline: none;
    border: 0px solid transparent;
  }
  button {
    background: transparent;
    outline: none;
    border: 0px solid transparent;
  }
  .phone {
    @include wh(100%, auto);
    border-bottom: 1px solid #dddddd;
    input {
      width: 400px;
    }
    // .verify-btn {
    //   background: #FD5830;
    // }
  }
  .verify {
    @include wh(100%, auto);
    border-bottom: 1px solid #dddddd;
  }
  .login-btn {
    @include wh(100%, 76px);
    background: #FD5830;
    border-radius: 100px;
    font-size: 24px;
    color: #ffffff;
    margin-top: 100px;
    &:disabled {
      color: #A9A9A9;
      background: #EEEEEE;
    }
  }
}
</style>
