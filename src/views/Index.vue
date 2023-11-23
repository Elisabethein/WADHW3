<template>
  <div class="index">
    <section>
      <AppPost />
    </section>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost.vue';

export default {
  name: 'IndexPage',
  components: {
    AppPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Fetch posts data and update the posts array
    fetch('posts.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.posts = data;
        })
        .catch(error => console.error('Error fetching data:', error));
  },
};
</script>

<style scoped>
/* Add your styles for the index page */
</style>
