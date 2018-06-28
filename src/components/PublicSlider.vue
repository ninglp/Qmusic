<template>
  <div id="public-slider">
    <div class="slider">
      <ul :style="styleObject" class="clearfix">
        <li v-for="(item,index) in images" :key="index" :style="{'width': 100 / (images.length + 1) + '%'}">
          <img :src="item.src" >
        </li>
        <li :style="{'width': 100 / (images.length + 1) + '%'}">
          <img :src="images[0].src">
        </li>
        </ul>
      <div class="slider-bar">
        <span v-for="(i,index) in images" :key="index" :class="{'select':index===mark}" v-on:touchstart="select(index)"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'publicslider',
    props:{
      images: {
        type: Array,
        default: []
      },
      width: {
        type: Number,
        default: 375,
      },
      height: {
        type: Number,
        default: 200
      }
    },
    data:function (){
      return {
        timer: null,
        mark: 0,
        show:{},
        imgArr:[],
        windowWidth:document.documentElement.clientWidth,
        styleObject:{
          width: this.images.length + 1 + '00%',
          transition: 'left 2s ease 0s',
          left:0
        }
      }
    },
    computed:{

    },
    methods:{
      play (){
        this.mark++
        if(this.mark===this.images.length + 1){
          this.styleObject.transition = 'left 0s ease 0s'
          this.mark=0
          this.styleObject.left = '-' + this.windowWidth * this.mark + 'px'
        }else{
        this.styleObject.transition = 'left 2s ease 0s'
        this.styleObject.left = '-' + this.windowWidth * this.mark + 'px'
        }
      },
      start (){
        this.timer=setInterval(this.play,2600)
      },
      stop (){
        clearInterval(this.timer)
      },
      select (i){
        if(i > 0){
         this.mark=i-1
        }else{
         this.mark=i
        }
        this.play()
      },
      resize (){
        this.fh = (document.documentElement.clientWidth / 2.5) + 'px'
      }
    },
    created (){
      var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      window.addEventListener(evt,this.resize,false);
      this.start()
    }
  }
</script>
<style scoped>
  #public-slider{
    position: relative;
    height: auto;
    width: 100%;
  }
  #public-slider .slider{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  #public-slider .slider ul{
    position: relative;
    width: 600%;
  }
  #public-slider .slider ul li{
    display: block;
    float: left;
  }
  #public-slider .slider ul li img{
    width: 100%;
  }
  #public-slider .slider-bar{
    position: absolute;
    font-size: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
    z-index: 12;
  }
 #public-slider .slider-bar span{
   display: inline-block;
   width: .14rem;
   height: .14rem;
   margin: 0 .08rem;
   background-color: #999;
   border-radius: .14rem;
}
 #public-slider .slider-bar .select{
   background-color: #fff;   
 }
</style>
