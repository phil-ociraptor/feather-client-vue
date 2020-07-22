<template>
  <div class="feather-authentication-form">
    <email-password-authentication-form />
  </div>
</template>

<script>
import EmailPasswordAuthenticationForm from "./EmailPasswordAuthenticationForm/EmailPasswordAuthenticationForm";

export default {
  name: "AuthenticationForm",
  components: {
    EmailPasswordAuthenticationForm
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
