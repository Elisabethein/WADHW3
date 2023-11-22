<template>
  <div>
    <Header />
    <nav>
      <router-link to="/index">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>

    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>


export default {

};
</script>

<style>
#app {
  font-family: monaco, Consolas, Lucida Console, monospace;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
/* background-image: url('https://images.template.net/96416/blue-watercolor-background-d6g5y.jpg'); */
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
