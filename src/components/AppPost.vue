<template>
  <section>
    <div id="app-post">
      <PostContainer v-for="post in posts" :key="post.id" :post="post" @like="handleLike(post)" />
      <button @click="resetAllLikes" class="reset-likes-btn">Reset All Likes</button>
    </div>
  </section>
</template>

<script>
import PostContainer from './PostContainer.vue';

export default {
  name: 'AppPost',
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
          // Emit an event to notify child components that posts are loaded
          this.$emit('posts-loaded', data);
        })
        .catch(error => console.error('Error fetching data:', error));
  },
  methods: {
    handleLike(clickedPost) {
      // Find the index of the post in the array
      const index = this.posts.findIndex(post => post.id === clickedPost.id);
      // Update the post in the array by creating a new object with the updated like count
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], likes: this.posts[index].likes + 1 };
      }
    },

    resetAllLikes() {
      this.posts.forEach(post => {
        post.likes = 0;
      });
    },
  },
};
</script>

<style scoped>

.reset-likes-btn {

}
</style>
