<template>
  <div class="feather-authentication-form">
    <!-- <input v-model="email" placeholder="email" />
    <input v-model="password" placeholder="password" type="password" />
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Login!
    </button> -->
    <email-password-authentication-form />
  </div>
</template>

<script>
import EmailPasswordAuthenticationForm from "./EmailPasswordAuthenticationForm/EmailPasswordAuthenticationForm";

export default {
  name: "AuthenticationForm",
  components: {
    EmailPasswordAuthenticationForm
  },
  data() {
    return {
      email: "",
      password: "",
      isBusy: false
    };
  },
  methods: {
    onSubmit() {
      console.log("clicked on submit!");
      this.isBusy = true;
      this.$feather
        .newCurrentCredential({
          email: this.email,
          password: this.password
        })
        .then(credential => {
          if (credential.status !== "valid")
            throw new Error("Email or password is incorrect.");
          return this.$feather.newCurrentUser(credential.token);
        })
        .then(currentUser => {
          this.isBusy = false;
          console.log(currentUser);
        })
        .catch(e => {
          // Handle errors
          this.isBusy = false;
          console.error(e);
        });
    }
  }
};
</script>

<style>
.feather-authentication-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
