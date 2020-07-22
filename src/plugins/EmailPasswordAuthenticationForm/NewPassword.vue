<template>
  <div class="feather-authentication-form">
    New Password
    <form-input
      :onChange="onChangePassword"
      :value="password"
      name="passwordInput"
      placeholder=""
      title="New Password"
      type="password"
    />
    <div v-if="!!errorMessage">{{ errorMessage }}</div>
    <button :disabled="isBusy" @click="onSubmit">
      <div class="spinner" v-if="isBusy">Loading</div>
      Update Password
    </button>
  </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";

export default {
  name: "EmailPasswordAuthenticationFormNewPassword",
  components: {
    FormInput
  },
  props: {
    email: String,
    input: Object,
    isBusy: Boolean,
    onChangeInput: Function,
    setCurrentForm: Function,
    setIsBusy: Function
  },
  data() {
    return {
      helpButton: {
        title: "Forgot Password?",
        onClick: () => this.setCurrentForm("forgot_password")
      },
      errorMessage: null,
      password: ""
    };
  },
  methods: {
    onChangePassword(event) {
      this.password = event.target.value;
    },
    onSubmit() {
      this.setIsBusy(true);
      const password = this.password;
      this.$feather
        .currentCredential()
        .then(credential =>
          this.$feather.passwords.create(password, credential.token)
        )
        .then(() =>
          this.$feather.newCurrentCredential({ email: this.email, password })
        )
        .then(credential => this.$feather.newCurrentUser(credential.token))
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
