<template>
  <div>
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'

  export default {
    name: 'PageView',
    components: {
      'top-bar': TopBar
    }
  }
</script>
