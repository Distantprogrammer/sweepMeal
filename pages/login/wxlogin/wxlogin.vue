<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { login } from '@api/auth/user';
const code = ref('');
const getLogin = () => {
  uni.login({
    provider: 'weixin',
    success: (res) => {
      console.log(res);
      code.value = res.code;
    },
  });
  console.log(789);
};
const getPhoneNumber = (e) => {
  getLogin();
  // 不允许授权
  if (e.detail.errMsg !== 'getPhoneNumber:ok') {
    return;
  }

  let encryptedData = e.detail.encryptedData;
  let iv = e.detail.iv;
  // login({
  //   encryptedData,
  //   iv,
  //   code: code.value,
  //   grant_type: 'wxxcx',
  //   // tstPid : uni.getStorageSync('shareUserId'),//todo
  //   source: this.type, //todo
  //   invCode: uni.getStorageSync('invCode'), //todo
  // }).then((result) => {
  //   if (result.error_code && result.error_code == 400) {
  //     uni.showToast({
  //       icon: 'none',
  //       title: result.error_description,
  //     });
  //     return;
  //   }
  //   this.$store.commit('login', result);
  //   uni.showToast({
  //     icon: 'none',
  //     title: '登陆成功',
  //   });

  //   setTimeout(() => {
  //     uni.redirectTo({
  //       url: b64DecodeUnicode(this.$Route.query.f),
  //     });
  //   }, 600);
  // });
};
// onLoad() {
//     }
</script>

<template>
  <div class="wxlogin">
    <div class="login_img">
      <img class="img" src="@/static/login/img_Illustration_login.png" alt="" />
    </div>
    <div class="login_tip">请完成授权以继续使用</div>
    <button class="login_btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
      <img class="img" src="@/static/login/ico_btn_wechat_white.png" alt="" />
      <span class="span" @click="wxlogin">微信账号一键登录</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
.wxlogin {
  padding-top: 180rpx;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login_img {
  width: 480rpx;
  height: 380rpx;
}
.login_tip {
  margin-top: 60rpx;
  font-size: 28rpx;
  font-weight: 500;
  letter-spacing: 0rpx;
  line-height: 28rpx;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  vertical-align: top;
}
.login_btn {
  margin-top: 40rpx;
  width: 520rpx;
  height: 90rpx;
  border-radius: 50rpx;
  background: rgba(36, 147, 241, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: 44rpx;
    height: 44rpx;
    margin-right: 6rpx;
  }
  .span {
    font-size: 32rpx;
    font-weight: 500;
    letter-spacing: 0rpx;
    line-height: 32rpx;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
  }
}
</style>
