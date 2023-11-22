<template>
    <div class = "index">
      <h1>This is an index page</h1>
      <Posts />
    </div>
  </template>
  
  <script>
  import Posts from './Posts.vue';
  
  export default {
    components: {
      Posts,
    },
  };
  </script>
  