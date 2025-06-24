<script setup>
import MyContacts from "./components/MyContacts.vue";
</script>

<template>
  <MyContacts />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
body {
  margin: 0;
  background: #f5f5f5;
}
#app {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
}
@media (min-width: 641px) {
  #app {
    padding: 0 20px;
    max-width: 728px;
  }
}
</style>
