<template>
  <div class="feather-authentication-form">
    Verify Email
    <verification-code-input
      name="verificationCodeInput"
      placeholder=""
      title="Verification Code"
      type="text"
      v-model="verificationCode"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Continue
    </button>
  </div>
</template>

<script>
import VerificationCodeInput from "../VerificationCodeInput/VerificationCodeInput.vue";

export default {
  name: "EmailPasswordAuthenticationFormForgotPassword",
  components: {
    VerificationCodeInput
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
      verificationCode: "",
      errorMessage: null,
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("clicked on submit!");
      this.setIsBusy(true);
      const verificationCode = this.verificationCode;
      this.$feather
        .currentCredential()
        .then(credential => credential.update({ verificationCode }))
        .then(credential => {
          this.setIsBusy(false);
          if (credential.status === "valid") {
            this.setCurrentForm("new_password");
          } else {
            this.errorMessage =
              "Something went wrong. We were not able to verify ownership of your email address.";
          }
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
