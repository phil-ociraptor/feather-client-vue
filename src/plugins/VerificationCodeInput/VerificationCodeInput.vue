<template>
  <div>
    <p>TODO THIS IS JUST FormInput copy pasta</p>
    <p>{{ title }}</p>
    <button
      v-if="helpButton"
      type="button"
      :name="helpButton.name"
      @click="helpButton.onClick"
    >
      {{ helpButton.title }}
    </button>
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "VerificationCodeInput",
  props: ["helpButton", "name", "placeholder", "title", "type", "value"],
  methods: {
    onSubmit() {
      console.log("clicked on submit!");
    }
  }
};
</script>

<style>
.feather-authentication-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
