<template>
  <div class="feather-authentication-form">
    Sign in
    <form-input
      :onChange="onChangeInput"
      name="emailInput"
      placeholder
      title="Email"
      type="email"
      :value="email"
    />
    <form-input
      :helpButton="helpButton"
      :onChange="onChangeInput"
      name="passwordInput"
      placeholder
      title="Password"
      type="password"
      :value="password"
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
    setEmail: Function,
    setIsBusy: Function,
    setPassword: Function
  },
  data() {
    return {
      emailModel: "",
      passwordModel: "",
      helpButton: {
        title: "Forgot Password?",
        onClick: () => this.setCurrentForm("forgot_password")
      },
      errorMessage: null
    };
  },
  methods: {
    onChange(e) {
      console.log("CHANGING!");
      console.log(e.target);
    },
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
