<template>
  <div class="feather-authentication-form">
    Sign up
    <form-input
      :onChange="onChangeInput"
      name="emailInput"
      placeholder
      title="Email"
      type="email"
      :value="email"
    />
    <form-input
      :onChange="onChangeInput"
      name="passwordInput"
      placeholder
      title="Password"
      type="password"
      :value="password"
    />
    <form-input
      :onChange="onChangeInput"
      name="confirmPasswordInput"
      placeholder
      title="Confirm password"
      type="password"
      :value="confirmPassword"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Login!
    </button>
    <span @click="e => setCurrentForm('sign_in')">Go to sign in</span>
  </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";

export default {
  name: "EmailPasswordAuthenticationFormSignUp",
  components: {
    FormInput
  },
  props: {
    confirmPassword: String,
    email: String,
    isBusy: Boolean,
    onChangeInput: Function,
    password: String,
    setCurrentForm: Function,
    setIsBusy: Function
  },
  data() {
    return {
      errorMessage: null
    };
  },
  methods: {
    onSubmit() {
      console.log("clicked on submit!");
      if (this.password !== this.confirmPassword) {
        this.errorMessage =
          "Your password and password confirmation do not match";
        return;
      }
      this.setIsBusy(true);
      this.$feather
        .newCurrentCredential({
          email: this.email,
          password: this.password
        })
        .then(credential => {
          if (credential.status !== "valid")
            throw new Error("Email address already registered.");
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
