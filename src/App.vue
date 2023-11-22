<template>
  <nav>
    <router-link to ="/index">Home</router-link>
    <router-link to ="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: monaco, Consolas, Lucida Console, monospace;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  background-image: url('https://images.template.net/96416/blue-watercolor-background-d6g5y.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* Ensure the middle section takes up the remaining space */
router-view {
  flex: 1;
}
</style>
