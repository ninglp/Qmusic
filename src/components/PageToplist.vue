<template>
  <div class="toplist-warp">
  <ul>
    <li>
      <div class="clearfix">
        <a href="">
          <img src="/static/img/t1.jpg">
          <span></span>
        </a>
        <div class="topic_info">
          <div class="topic_cont">
            <h3>巅峰榜·流行指数</h3>
            <p><span>1 </span> 怪咖 <span>- 薛之谦</span></p>
            <p><span>2 </span> 渐渐 <span>- 陈奕迅</span></p>
            <p><span>3 </span> 浪人琵琶 <span>- 胡66</span></p>
          </div>
          <i class="topic_arrow"></i>
        </div>
      </div>
    </li>
  </ul>
    <ul>
    <li>
      <div class="clearfix">
        <a href="">
          <img src="/static/img/t2.jpg">
          <span></span>
        </a>
        <div class="topic_info">
          <div class="topic_cont">
            <h3>巅峰榜·热歌</h3>
            <p><span>1 </span> That Girl<span>-  Olly Murs</span></p>
            <p><span>2 </span> DDU-DU DDU-DU <span>- BLACKPINK</span></p>
            <p><span>3 </span> 讲真的 <span>- 曾惜</span></p>
          </div>
          <i class="topic_arrow"></i>
        </div>
      </div>
    </li>
  </ul>
    <ul>
    <li>
      <div class="clearfix">
        <a href="">
          <img src="/static/img/t3.jpg">
          <span></span>
        </a>
        <div class="topic_info">
          <div class="topic_cont">
            <h3>巅峰榜·新歌</h3>
            <p><span>1 </span> 怪咖 <span>- 薛之谦</span></p>
            <p><span>2 </span> 渐渐 <span>- 陈奕迅</span></p>
            <p><span>3 </span> 只要平凡 <span>- 张杰/张碧晨</span></p>
          </div>
          <i class="topic_arrow"></i>
        </div>
      </div>
    </li>
  </ul>
    <ul>
    <li>
      <div class="clearfix">
        <a href="">
          <img src="/static/img/t4.jpg">
          <span></span>
        </a>
        <div class="topic_info">
          <div class="topic_cont">
            <h3>巅峰榜·网络歌曲</h3>
            <p><span>1 </span> 怪咖 <span>- 薛之谦</span></p>
            <p><span>2 </span> 渐渐 <span>- 陈奕迅</span></p>
            <p><span>3 </span> 浪人琵琶 <span>- 胡66</span></p>
          </div>
          <i class="topic_arrow"></i>
        </div>
      </div>
    </li>
  </ul>
    <ul>
    <li>
      <div class="clearfix">
        <a href="">
          <img src="/static/img/t1.jpg">
          <span></span>
        </a>
        <div class="topic_info">
          <div class="topic_cont">
            <h3>巅峰榜·流行指数</h3>
            <p><span>1 </span> 怪咖 <span>- 薛之谦</span></p>
            <p><span>2 </span> 渐渐 <span>- 陈奕迅</span></p>
            <p><span>3 </span> 浪人琵琶 <span>- 胡66</span></p>
          </div>
          <i class="topic_arrow"></i>
        </div>
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
  .toplist-warp{
    width: 100%;
    margin: 10px;
  }
    .toplist-warp ul{
      padding-top: 10px;
    }
  .toplist-warp ul li{
    position: relative;
    width: 100%;
    background-color: #fff;
  }
  .toplist-warp ul li a{
    display: block;
    float: left;
    width: 30%;
  }
  .toplist-warp ul li a img{
    width: 100%;
  }
  .topic_info{
    float: left;
    width: 70%;
    padding-left: 10px;
  }
  .topic_info .topic_cont h3{
    font-size: 16px;
    margin: 6px 0;
    font-weight: normal;
  }
  .topic_info .topic_cont{
    font-size: 14px;
  }
  .topic_info .topic_cont p{
    white-space: nowrap;
    overflow: hidden;
    margin: .12rem 0;
  }
  .topic_info .topic_cont p span{
    color: rgba(0,0,0,.5);
  }
  .topic_info .topic_arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -4px;
    width: .14rem;
    height: .14rem;
    border-right: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    transform: rotate(-45deg);
  }
</style>
