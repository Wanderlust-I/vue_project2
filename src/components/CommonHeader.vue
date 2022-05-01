<template>
  <header>
    <div class="wrapper">
      <el-row>
        <el-col :span="4">
          <div class="logo">命若朝霜</div>
        </el-col>
        <el-col :span="20">
          <el-menu
            mode="horizontal"
            class="nav"
            :default-active="activeIndex"
            @select="handleSelect"
            background-color="#2d2d2d"
            text-color="#9d9d9d"
            active-text-color="#fff"
          >
            <el-menu-item  index="1">
              <router-link to="/"
                ><i class="iconfont icon-home"></i>⾸⻚</router-link
              >
            </el-menu-item>
            <el-menu-item index="2"  v-if='isSignIn===0'>
              <router-link to="/blog">博文</router-link>
            </el-menu-item>
               <el-menu-item index="2"  v-else-if='isSignIn===1' > 
              <router-link to="/article">我的博文</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/">杂谈</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link  to="/">画廊</router-link>
            </el-menu-item>
              <el-menu-item index="5" v-if='isSignIn===0'>
              <router-link class="signBtn" to="/login">登录</router-link>
            </el-menu-item>
             </el-menu-item>
              <el-menu-item index="5" v-else-if='isSignIn===1'>
              <router-link class="signBtn" to="/person">admin</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    // 修改当前活跃页
    handleSelect(index) {
      this.activeIndex = index + "";
    },
  },
  computed:{
    isSignIn(){
      return this.$store.state.isSignIn
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color:#2d2d2d; 
.logo{
   font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.nav{
  float:right;
  //设置使点击文字以外也能页面跳转
  li{
    padding: 0;
    a{
      display: inline-block;
      padding: 0 80px;
       .iconfont{
      vertical-align: top;
      margin:0 10px 0 0;
    }
    }
   
  }
}
.el-menu-item{
 text-align: center;
}
.signBtn {
    background: #2f8ee9 !important;
    color: #fff !important;
    line-height: 60px;
}

}
</style>