<template>
    <header class="header">
      <ul class="nav">
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/addPost" class="home">Add Post</router-link>
      </ul>
      <div class="dropdown">
        <input type="image" @click="toggleDropdown" class="dropbtn" :src="profilePicture" alt="Profile picture" />
        <div v-if="isDropdownOpen" id="myDropdown" class="dropdown-content">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <button type="button" @click="logout">Logout</button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
        user: {
          name: "Sarah Maas",
          email: "sarah@example.com",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles from header.css here */
  </style>
  