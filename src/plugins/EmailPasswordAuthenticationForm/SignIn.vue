<template>
  <div class="feather-authentication-form">
    Sign in
    <form-input
      :class="myClass"
      :onChange="onChangeInput"
      :value="email"
      name="emailInput"
      placeholder
      title="Email"
      type="email"
    />
    <form-input
      :helpButton="helpButton"
      :onChange="onChangeInput"
      :value="password"
      name="passwordInput"
      placeholder
      title="Password"
      type="password"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Login!
    </button>
    <span @click="e => setCurrentForm('sign_up')">Go to sign up</span>
  </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";
import { css } from "emotion";
import { defaultStyles } from "../styles.js";

const myClass = css`
  ${defaultStyles.subtitle}
`;

export default {
  name: "EmailPasswordAuthenticationFormSignIn",
  components: {
    FormInput
  },
  props: {
    email: String,
    isBusy: Boolean,
    password: String,
    onChangeInput: Function,
    setCurrentForm: Function,
    setIsBusy: Function
  },
  data() {
    return {
      myClass,
      helpButton: {
        title: "Forgot Password?",
        onClick: () => this.setCurrentForm("forgot_password")
      },
      errorMessage: null
    };
  },
  methods: {
    onSubmit() {
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
          this.setIsBusy(false);
          this.errorMessage = null;
          console.log(currentUser);
        })
        .catch(e => {
          // Handle errors
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
