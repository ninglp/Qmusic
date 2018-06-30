<template>
  <div>
    <div class="searchbox">
      <input type="text" placeholder="搜索歌曲、歌单、专辑">
    </div>
    <div class="content">
      <h4>热门搜索</h4>
      <ul class="search-label clearfix">
        <li>梦想的声音 第二季</li>
        <li>再也不会遇见第二个他</li>
        <li>想带你去看晴空万里</li>
        <li>再见只是陌生人</li>
        <li>讲真的摩登兄弟</li>
        <li>不仅仅是喜欢</li>
        <li>可能否</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
  .searchbox{
    width: 90%;
    margin: .2rem auto;
    font-size: 16px;
    vertical-align: middle;
    background-color: #fff;
  }
  .searchbox input{
    height: .6rem;
    width: 100%;
    font-size: 16px;
    color: #999;
    padding-left: .4rem;
    border: none;
    outline:none;
  }
  .content{
    width: 100%;
    padding: .4rem;
    background-color: #fff;    
  }
  .content h4{
    font-size: 14px;
    color: #666;
  }
  .search-label{
    width: 100%;
    margin-top: .2rem;
  }
  .search-label li{
    float: left;
    font-size: 14px;
    padding: 0 .1rem;
    margin-bottom: .2rem;
    margin-right: .2rem;
    border: 1px solid #333;
    border-radius: .4rem;
    max-width: 100%;
  }
  .search-label li:nth-child(1){
    color:orangered;
    border: 1px solid orangered;
  }
</style>

