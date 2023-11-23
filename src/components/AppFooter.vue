<template>
  <div class="footer">
    <p>&copy; {{ currentYear }} All rights reserved.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* Add your styles for the footer */
.footer {
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  background-color: #D9F5F5;
  border: 1px darkcyan;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 80%;
  border-radius: 5px;
  margin: 0 10%;
  opacity: 95%;
}
</style>
