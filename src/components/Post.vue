<template>
    <section>
      <div id="posts-container">
        <post-container v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </template>
  
  <script>
  import PostContainer from './PostContainer.vue';
  
  export default {
    components: {
      PostContainer,
    },
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      // Fetch data and update posts
      fetch('posts.json')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
        .catch(error => console.error('Error fetching data:', error));
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles from indexStyles.css here */
  </style>
  