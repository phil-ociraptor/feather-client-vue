<template>
  <div class="feather-authentication-form">
    Reset password
    <form-input
      name="emailInput"
      placeholder=""
      title="Email"
      type="email"
      v-model="email"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Continue
    </button>
    <span @click="e => setCurrentForm('sign_in')">
      Cancel
    </span>
  </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";

export default {
  name: "EmailPasswordAuthenticationFormForgotPassword",
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
      const email = this.email;
      const templateName = "reset_password";
      this.$feather
        .newCurrentCredential({ email, templateName })
        .then(credential => {
          if (credential.status !== "requires_verification")
            throw new Error("Something went wrong.");
          this.setIsBusy(false);
          this.errorMessage = null;
          this.setCurrentForm("verify_email");
        })
        .catch(error => {
          this.setIsBusy(false);
          this.errorMessage = error.message;
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
