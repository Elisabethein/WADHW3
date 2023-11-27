<template>
  <div class="index">
    <section>
      <AppPost />
    </section>
  </div>
</template>

<script>
import AppPost from '@/components/AppPost.vue';
import { mapActions } from 'vuex';

export default {
  name: 'IndexPage',
  components: {
    AppPost,
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  mounted() {
    // Fetch posts data and update the store
    this.fetchPosts();
  },
};
</script>

<style scoped>
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
