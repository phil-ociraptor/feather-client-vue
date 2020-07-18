<template>
  <div @click="doTheThing">Click me!</div>
</template>

<script>
export default {
  name: "Clicker",
  methods: {
    doTheThing() {
      this.$feather.currentUser = "Alice";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
