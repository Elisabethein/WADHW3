<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/AppHeader.vue';
import Footer from '@/components/AppFooter.vue';
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
  background-image: url('~@/assets/background.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
