<template>
  <div>
    <router-link :to="{path: '/com'}">动态添加组件</router-link>
    <router-link :to="{path: '/canvas'}">动态画圆</router-link>
    <div style='height: 50px'></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
