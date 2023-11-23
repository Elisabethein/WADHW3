<template>
  <div>
    <Header />
    <section>
      <div class="container">
        <p class="single"><b>Welcome to PostIt</b><br>
          <span><router-link to="/signup" class="links">Create an account</router-link><br></span>
          or<br>Please log in</p>

        <form id="loginForm" @submit.prevent="validateForm">
          <label>Email
            <input v-model="email" type="text" placeholder="Email" name="email" required />
          </label>

          <label>Password
            <input v-model="password" type="password" placeholder="Password" name="psw" required />
          </label>
          <button type="submit">Log in</button>
        </form>

        <p class="single"><span><router-link to="/forgot-password" class="links">Forgot password</router-link></span></p>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/AppHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    validateForm() {
      if (this.email === '' || this.password === '') {
        alert("Please fill in both email and password fields.");
        return;
      }

      // Your form submission logic goes here

      // Example: redirect to home page
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
label {
  text-align: center;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: navy;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

input[type="text"][name="email"],
input[type="password"][name="psw"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

span {
  margin: auto;
  padding-top: 16px;
}

.links {
  color: #007BFF;
}

.links:hover {
  color: #0056b3;
}
</style>
