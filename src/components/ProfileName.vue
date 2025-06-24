<script setup>
import { onMounted, defineProps } from "vue";

const props = defineProps({ name: { first: String, last: String } });

onMounted(() => {});
</script>

<template>
  <h2 class="name">{{ props.name.first }} {{ props.name.last }}</h2>
</template>

<style scoped lang="scss">
.name {
  font-size: 28px;
  font-weight: normal;
  margin: 0 0 20px 0;
  word-wrap: break-word;
}
</style>
