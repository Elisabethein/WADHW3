<template>
  <body>

    <section>
      <div class="container">
        <p class="single"><br>{{ showSignUpText ? 'Sign up' : 'Log in' }}</p>
      <form @submit.prevent="login" class="login-form">
        <label>
          Email
          <input v-model="email" type="text" placeholder="Email" required />
        </label>

        <label>
          Password
          <input v-model="password" type="password" placeholder="Password" required />
        </label>


        <div v-if="!isPasswordValid" class="password-validation">
          <p class="paragraph">Password is not valid.<br> Please follow these conditions:</p>
          <ul>
            <li v-if="!passwordRequirements[0].isValid">At least 8 characters and less than 15 characters</li>
            <li v-if="!passwordRequirements[1].isValid">At least one uppercase letter</li>
            <li v-if="!passwordRequirements[2].isValid">At least two lowercase letters</li>
            <li v-if="!passwordRequirements[3].isValid">At least one number</li>
            <li v-if="!passwordRequirements[4].isValid">Start with an uppercase letter</li>
            <li v-if="!passwordRequirements[5].isValid">Include the character “_”</li>
          </ul>
        </div>

        <button type="submit" :disabled="!isPasswordValid">Login</button>
      </form>
        <p class="single">
          <span v-if="showSignUpText">Already have an account? </span>
          <span class="links" @click="toggleSignUpText" v-if="showSignUpText">Log in</span>
          <span v-else>Don't have an account? </span>
          <span class="links" @click="toggleSignUpText" v-if="!showSignUpText">Sign up</span>
        </p></div>
    </section>

  </body>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      isPasswordValid: true, // Initialize to true by default
      passwordRequirements: [
        { name: 'at least 8 characters', regex: /^.{8,14}$/},
        { name: 'at least one uppercase character', regex: /^(?=.*[A-Z])/ },
        { name: 'at least two lowercase characters', regex: /^(?=.*[a-z].*[a-z])/ },
        { name: 'at least one numeric value', regex: /^(?=.*\d)/ },
        { name: 'start with an uppercase character', regex: /^[A-Z].*/ },
        { name: 'include the character “_"', regex: /^(?=.*_)/ },
      ],
      showSignUpText: false,
    };
  },
  methods: {
    validatePassword() {
      for (const requirement of this.passwordRequirements) {
        requirement.isValid = requirement.regex.test(this.password);
      }
      this.isPasswordValid = this.passwordRequirements.every(requirement => requirement.isValid);
    },

    login() {
      this.validatePassword();

      if (this.isPasswordValid) {
        // Implement your login logic here
        console.log('Login:', this.email, this.password);
        // Example: redirect to the home page after successful login
        this.$router.push('/');
      }
    },
    toggleSignUpText() {
      this.showSignUpText = !this.showSignUpText;
    },
  },
  watch: {
    password: 'validatePassword',
  },
};
</script>

<style scoped>
/* Add your styles for the login page */

* {
  font-family: monaco, Consolas, Lucida Console, monospace;
  font-size: 16px;
}

body {
  margin: 0;
  padding-bottom: 1000px;
  background-color: #f0f0f0;
  background-image: url('https://images.template.net/96416/blue-watercolor-background-d6g5y.jpg'); /* Replace 'your-image-url.jpg' with the URL of your image */ /* Prevent image from repeating */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

p.single {
  line-height: 1.5;
  text-align: center;
  text-justify: inter-word;
}

.container {
  padding: 10px 10px 10px;
  max-width: 600px;
  margin: 90px auto 75px;
  background-color: #D1DEDE;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
  padding-top: 20px;
  text-align: center;
}

.links {
  color: #007BFF;
}

.links:hover {
  color: #0056b3;
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

label {
  text-align: center;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: navy;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

button:hover {
  background-color: #0056b3;
}

.password-validation p, .password-validation li {
  margin-top: 10px;
  color: red;
  font-size: 11px;
  text-align: justify;
}

</style>
