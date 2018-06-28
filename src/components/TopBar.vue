<template>
  <div>
    <!--    顶部logo    -->
    <div class="top-bar">
      <a href=""><img class="music_logo" src="/static/img/logo.png" alt=""></a>
    </div>
    <!--    顶部 导航  -->
    <div class="top_nav">
      <router-link to='recommend' :class="{'active':navpath.fullPath==='/pages/recommend'}">推荐</router-link>
      <router-link to='toplist' :class="{'active':navpath.fullPath==='/pages/toplist'}">排行榜</router-link>
      <a href="">搜索</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'top-bar',
    data: function (){
      return{
      }
    },
    computed:{
      navpath: function (){
        return this.$route
      }
    }
  }
</script>
<style scoped>
.top-bar{
  height: 0.75rem;
  width: 100%;
  padding-top:.125rem;
  background-color: #31c27c;
}
.music_logo{
  height: .5rem;
  margin-left: .2rem;
}
.top_nav{
  height: .75rem;
  width: 100%;
}
.top_nav a{
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  width: 33%;
  height: .75rem;
  line-height: .75rem;
  font-size: 20px;
  color: rgba(0,0,0,.6);
  text-align: center;
}
.top_nav .active{
  border-bottom: 3px solid #31c27c;
  color: #31c27c;
}
.top_nav a:nth-child(2){
  width: 34%;
}
</style>

