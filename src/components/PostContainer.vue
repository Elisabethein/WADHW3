<template>
  <div class="postContainer">
    <div class="top-row">
      <img :src="require('@/assets/' + post.profile_picture)" class="postImage" alt="User profile picture" />
      <p class="regular">{{ formatDate(post.created_time) }}</p>
    </div>

    <!-- Check if there is an image_url -->
    <img v-if="post.image_url" :src="require('@/assets/' + post.image_url)" class="postImage" alt="Image" />

    <p class="paragraph">{{ post.text }}</p>

    <!-- Like button and like count -->
    <div class="like-container">
      <button
          class="like-button"
          @mousedown="startPress"
          @mouseup="endPress"
          @click="likePost"
          :class="{ 'pressed': isPressed, 'liked': isLiked }"
      >
        <img :src="require('@/assets/heart.png')" alt="Like" />
      </button>
      <span class="like-count">{{ post.likes }}</span>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: ['post'],
    data() {
      return {
        isLiked: false,
        isPressed: false,
      };
    },
    methods: {
      formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1.
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      },
      likePost() {
        // Ensure that this.post.id is defined
        if (this.post.id !== undefined) {
          // Emit the 'like' event with the entire post object
          this.$emit('like', this.post.id);
        } else {
          console.error('Post ID is undefined:', this.post);
        }
      },
      startPress() {//to modify the size of the heart img
        this.isPressed = true;
      },
      endPress() {
        this.isPressed = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .postContainer {
    padding: 5px;
    max-width: 600px;
    margin: 10px auto;
    background-color: #D1DEDE;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: auto;
  }
  .top-row {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 5px; /* Reduce margin bottom */
  }

  .postContainer img {
    width: 35px;
    height: 35px;
    border-radius: 5px;
  }

  div + .postImage {
    margin-top: 10px;
    width: 100%;
    height: auto;
  }

  div ~ p.paragraph {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 13px;
  }

  .top-row > p.regular {
    margin-left: 10px;
    color: darkgray;
    font-size: 13px;
    font-style: italic;
    margin-bottom: 15px;
  }

  .like-button {
    width: 0.8cm;
    height: 0.8cm;
    display: inline-block;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .like-button:hover {
    border-radius: 30px;
    background-color: transparent;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.75);
  }

  .like-button img {
    margin-top: 1px;
    margin-left: -3.4px;
    width: 25px;
    height: 25px;
  }

  .like-container {
    display: flex;
    align-items: center;
    margin-top: 5px; /* Reduce margin top */
  }

  .like-count {
    margin-left: 5px;
    font-size: 14px;
    color: palevioletred;
  }

  .like-button.pressed img {
    transform: scale(0.8);
  }

  </style>
  