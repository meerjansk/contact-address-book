<script setup>
import { defineProps } from "vue";

const props = defineProps({
  address: { city: String, postcode: Number, state: String, country: String },
});
</script>

<template>
  <address class="address">
    <span>{{ props.address.city }}</span>
    <span>{{ props.address.postcode }} {{ props.address.state }}</span>
    <span>{{ props.address.country }}</span>
  </address>
</template>

<style scoped lang="scss">
.address {
  > span {
    font-size: 14px;
    display: block;
    font-style: normal;
    word-wrap: break-word;
  }
}
</style>
