<template>
  <div class="feather-authentication-form">
    Sign in
    <form-input
      name="emailInput"
      placeholder=""
      title="Email"
      type="email"
      v-model="email"
    />
    <form-input
      :helpButton="helpButton"
      name="passwordInput"
      placeholder=""
      title="Password"
      type="password"
      v-model="password"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Login!
    </button>
    <span @click="e => setCurrentForm('sign_up')">
      Go to sign up
    </span>
  </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";

export default {
  name: "EmailPasswordAuthenticationFormSignIn",
  components: {
    FormInput
  },
  props: {
    isBusy: Boolean,
    setCurrentForm: Function,
    setIsBusy: Function
  },
  data() {
    return {
      helpButton: {
        title: "Forgot Password?",
        onClick: () => this.setCurrentForm("forgot_password")
      },
      email: "",
      errorMessage: null,
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("clicked on submit!");
      this.setIsBusy(true);
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
          //this.isBusy = false;
          this.setIsBusy(false);
          this.errorMessage = null;
          console.log(currentUser);
        })
        .catch(e => {
          // Handle errors
          //this.isBusy = false;
          this.setIsBusy(false);
          this.errorMessage = e.message;
          console.error(e);
        });
    }
  }
};
</script>

<style>
.feather-authentication-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
