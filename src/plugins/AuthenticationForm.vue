<template>
  <div class="feather-authentication-form">
    <email-password-authentication-form :styles="styles" />
  </div>
</template>

<script>
import EmailPasswordAuthenticationForm from "./EmailPasswordAuthenticationForm/EmailPasswordAuthenticationForm";
import { defaultStyles } from "./styles.js";
import { mergeStyles } from "./utils.js";

export default {
  name: "AuthenticationForm",
  components: {
    EmailPasswordAuthenticationForm
  },
  props: {
    customStyles: Object
  },
  data() {
    return {
      styles: mergeStyles(defaultStyles, this.customStyles)
    };
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
