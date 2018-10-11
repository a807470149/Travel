<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
 import Home from './pages/home/Home'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style></style>
