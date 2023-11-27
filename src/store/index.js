import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('https://gist.githubusercontent.com/Elisabethein/b38c158240c88f0620dcd42d76d8bf90/raw/6e4f6335e06bfdaa1fee933326af001f74a98fc7/wad_posts.json');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();

        commit('setPosts', posts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    },
  },
});

export default store;
