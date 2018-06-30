<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
let fs='';
export default {
  name: 'App',
  mounted: function (){
    fs=document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + "px";
    console.log(fs);
  }
}
</script>

<style>
html,body,div,span,a,ul,li,p,input,h1,h2,h3,h4{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size: 100px;
}
body{
  font-family: "hiragino sans gb",arial;
  background-color: #f4f4f4;
}
a,a:hover{
  text-decoration: none;
  color: #000;
}
img{
  display: block;
}
ul,li{
  list-style: none;
}
.clearfix:after{
  display: block;
  height: 0;
  content: ' ';
  clear: both;
}
h2{
  font-size: 16px;
  color: #000;
}
.title-list{
  font-weight: normal;
}
</style>
