<script setup>
import { defineProps } from "vue";

const props = defineProps({
  picture: { large: String },
  name: { first: String, last: String },
});
</script>

<template>
  <figure class="picture">
    <img
      :src="props.picture.large"
      :alt="props.name.first + ' ' + props.name.last"
    />
  </figure>
</template>

<style scoped lang="scss">
.picture {
  margin: 0 0 12px 0;
  > img {
    border-radius: 50%;
  }
}
</style>
