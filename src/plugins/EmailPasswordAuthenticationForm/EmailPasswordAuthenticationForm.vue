<template>
  <div class="wrapper">
    <sign-in
      :email="email"
      :isBusy="isBusy"
      :onChangeInput="onChangeInput"
      :password="password"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-if="currentForm === 'sign_in'"
    />
    <sign-up
      :email="email"
      :isBusy="isBusy"
      :onChangeInput="onChangeInput"
      :password="password"
      :confirmPassword="confirmPassword"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'sign_up'"
    />
    <forgot-password
      :email="email"
      :isBusy="isBusy"
      :onChangeInput="onChangeInput"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'forgot_password'"
    />
    <verify-email
      :isBusy="isBusy"
      :onChangeInput="onChangeInput"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'verify_email'"
    />
    <new-password
      :email="email"
      :isBusy="isBusy"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'new_password'"
    />
  </div>
</template>

<script>
import ForgotPassword from "./ForgotPassword.vue";
import NewPassword from "./NewPassword.vue";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";
import VerifyEmail from "./VerifyEmail.vue";

export default {
  name: "EmailPasswordAuthenticationForm",
  components: {
    ForgotPassword,
    NewPassword,
    SignIn,
    SignUp,
    VerifyEmail
  },
  data() {
    return {
      confirmPassword: "",
      currentForm: "sign_in",
      email: "",
      isBusy: false,
      password: ""
    };
  },
  methods: {
    onChangeInput(event) {
      const value = event.target.value;
      event.preventDefault();
      switch (event.target.name) {
        case "emailInput":
          this.email = value;
          break;
        case "passwordInput":
          this.password = value;
          break;
        case "confirmPasswordInput":
          this.confirmPassword = value;
          break;
        default:
          break;
      }
    },
    setCurrentForm(currentForm) {
      this.currentForm = currentForm;
    },
    setIsBusy(value) {
      this.isBusy = value;
    }
  }
};
</script>

<style>
.feather-authentication-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
