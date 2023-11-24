<template>
  <div class="signup">
    <section>
      <p><strong>Create a new account</strong></p>
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
          <p>Password is not valid. Please follow these conditions:</p>
          <ul>
            <li v-if="!passwordRequirements[0].isValid">At least 8 characters and less than 15 characters</li>
            <li v-if="!passwordRequirements[1].isValid">At least one uppercase alphabet character</li>
            <li v-if="!passwordRequirements[2].isValid">At least two lowercase alphabet characters</li>
            <li v-if="!passwordRequirements[3].isValid">At least one numeric value</li>
            <li v-if="!passwordRequirements[4].isValid">Should start with an uppercase alphabet</li>
            <li v-if="!passwordRequirements[5].isValid">Should include the character “_”</li>
          </ul>
        </div>

        <button type="submit" :disabled="!isPasswordValid">Signup</button>
      </form>
      <p>
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
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
        console.log('Signup:', this.email, this.password);
        // Example: redirect to the home page after successful login
        this.$router.push('/');
      }
    },
  },
  watch: {
    password: 'validatePassword',
  },
};
</script>


<style scoped>
/* Add your styles for the signup page */
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

section {
  padding: 20px;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

label {
  margin-bottom: 10px;
  display: block;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.button-wrapper {
  position: relative;
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

p {
  margin-top: 20px;
}

.password-validation {
  margin-top: 10px;
  color: red;
}

.password-validation p {
  margin-bottom: 5px;
}

.password-validation ul {
  padding-left: 20px;
  list-style-type: disc;
}
</style>
