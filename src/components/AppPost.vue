<template>
  <section class="app-post-section">
    <div id="app-post">
      <PostContainer v-for="post in posts" :key="post.id" :post="post" @like="handleLike(post)" />
    </div>
    <button @click="resetAllLikes" :class="{ 'pressed': isResetPressed }" class="reset-likes-btn">Reset All Likes</button>
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
      isResetPressed: false,
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
      this.isResetPressed = true; // Set the pressed state
      setTimeout(() => {
        this.isResetPressed = false; // Reset the pressed state after a short delay
      }, 100);
    },
  },
};
</script>

<style scoped>
.app-post-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 75px;
  padding-top: 70px;
}

.reset-likes-btn {
  margin: 10px 10px;
  padding: 10px 15px;
  text-align: center;
  display: block;
  color: dimgray;
  font-size: 0.99em;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid darkcyan;
  background-color: #D9F5F5;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  opacity: 0.95;
}

.reset-likes-btn:hover {
  background-color: darkcyan;
  color: white;
  border-radius: 25px;
}

.reset-likes-btn.pressed {
  transform: scale(0.9);
}

</style>
