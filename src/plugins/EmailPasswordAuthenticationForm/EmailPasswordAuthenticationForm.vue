<template>
  <div class="wrapper">
    <sign-in
      :isBusy="isBusy"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-if="currentForm === 'sign_in'"
    />
    <sign-up
      :isBusy="isBusy"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'sign_up'"
    />
    <forgot-password
      :isBusy="isBusy"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'forgot_password'"
    />
    <verify-email
      :isBusy="isBusy"
      :setCurrentForm="setCurrentForm"
      :setIsBusy="setIsBusy"
      v-else-if="currentForm === 'verify_email'"
    />
    <new-password
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
      currentForm: "sign_in",
      isBusy: false
    };
  },
  methods: {
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
