<template>
    <header class="header">
      <div class="nav">
        <router-link to="/" @click="handleNavClick('/')" :class="{ 'nav-button': true, 'pressed': isNavButtonPressed('/') }">Home</router-link>
        <router-link to="/login" @click="handleNavClick('/login')" :class="{ 'nav-button': true, 'pressed': isNavButtonPressed('/login') }">Login</router-link>
      </div>
    </header>
  </template>

<script>
export default {
  data() {
    return {
      pressedNavButtons: [],
    };
  },
  methods: {
    handleNavClick(route) {//toggle the pressed state for the clicked route
      const index = this.pressedNavButtons.indexOf(route);
      if (index !== -1) {
        this.pressedNavButtons.splice(index, 1);
      } else {
        this.pressedNavButtons.push(route);
      }
      setTimeout(() => {//timeout to reset the pressed state after a short delay
        this.resetNavButtonState();
      }, 100);
    },
    isNavButtonPressed(route) {
      return this.pressedNavButtons.includes(route);
    },
    resetNavButtonState() {
      this.pressedNavButtons = [];
    },
  },
};
</script>
  
  <style scoped >
  .header {
    position: fixed;
    padding: 0.5em;
    border: 1px solid darkcyan;
    background-color: #D9F5F5;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    width: 80%;
    border-radius: 5px;
    margin: 0.5% 10%;
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

  .nav-button.pressed {
    transform: scale(0.9);
  }
  </style>
  