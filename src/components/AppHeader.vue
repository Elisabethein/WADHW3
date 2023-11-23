<template>
    <header class="header">
      <div class="nav">
        <router-link to="/" class="nav-button">Home</router-link>
        <router-link to="/login" class="nav-button">Login</router-link>
      </div>
    </header>
  </template>
  
  <script>
  </script>
  
  <style scoped >
  .header {
    padding: 0.5em;
    border: 1px solid darkcyan;
    background-color: #D9F5F5;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.75);
    width: 80%;
    border-radius: 5px;
    margin: 0 10%;
    opacity: 0.95;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    display: flex;
  }

  .nav-button {
    padding: 10px 15px;
    text-align: center;
    display: block;
    color: dimgray;
    font-size: 0.99em;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-button:hover {
    background-color: darkcyan;
    color: white;
    border-radius: 25px;
  }
  </style>
  