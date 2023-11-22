<template>
    <div class="postContainer">
      <!-- ... Your existing post container HTML ... -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['post'],
    methods: {
      formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1.
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles from general.css here */
  /* You may need to adapt or move some styles depending on your existing structure */
  </style>
  