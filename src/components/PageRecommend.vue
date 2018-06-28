<template>
  <!--   推荐页/主页   -->
  <div>
  <!--    轮播图 -->
    <music-slider :images="imgArr"></music-slider>
    <!-- 电台 -->
  <div class="mod-list">
    <h2 class="title-list">电台</h2>
    <ul class="clearfix">
      <li>
        <a href="">
          <div class="list-media">
            <img src="/static/img/r1.jpg" alt="">
          </div>
          <div class="list-info">热歌</div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="list-media">
            <img src="/static/img/r2.jpg" alt="">
          </div>
          <div class="list-info">一人一首招牌歌</div>
        </a>
      </li>
    </ul>
  </div>
  <div class="mod-list">
    <h2 class="title-list">热门歌单</h2>
    <p><a href="">去客户端发现更多好音乐 ></a></p>
  </div>
  <!-- 页脚 -->
  <footer>
    <p class="footer-center"><a href="">查看电脑版网页</a></p>
    <p class="footer-center"><img src="/static/img/logo_footer.png"></p>
    <p class="footer-copyright"><span>Copyright © 1998 - 2018</span></p>
  </footer>
  </div>
</template>
<script>
import PublicSlider from '@/components/PublicSlider'
  export default {
    name: 'PageRecommend',
    data: function (){
      return {
        imgArr:[
          {src:require('../assets/img/s0.jpg'),href:'/'},
          {src:require('../assets/img/s1.jpg'),href:'/'},
          {src:require('../assets/img/s2.jpg'),href:'/'},
          {src:require('../assets/img/s3.jpg'),href:'/'},
          {src:require('../assets/img/s4.jpg'),href:'/'}
        ]
      }
    },
    components: {
      'music-slider': PublicSlider
    }
  }
</script>
<style scopen>
  .mod-list{
    margin: 10px;
  }
  .mod-list ul{
    width: 100%;
  }
  .mod-list ul li{
    float: left;
    width: 50%;
  }
  .mod-list ul li:nth-child(1){
    padding-right: 5px;
  }
  .mod-list ul li:nth-child(2){
    padding-left: 5px;
  }
  .mod-list .list-media img{
    width: 100%;
  }
  .mod-list ul li a{
    display: block;
    background-color: #fff;
  }
  .mod-list .list-info{
    padding: 0 7px 5px;
    font-size: 14px;
    color: #000;
    word-wrap:break-word;
    height: 38px;
    line-height: 32px;
  }
  .mod-list p{
    height: .6rem;
    line-height: .6rem;
    font-size: 14px;
    text-align: center;
  }
  .mod-list p a{
    font-size: 14px;
    color: rgba(0,0,0,.6);
  }
  footer p{
    margin: .2rem 0;
  }  
  .footer-center{
    text-align: center;
    font-size: 14px;
    color: #000;
  }
  .footer-center img{
    display: inline-block;
    width: 20%;
  }
  .footer-copyright{
    font-size: 10px;
    color: rgba(0,0,0,.5);
    text-align: center;
  }
</style>

