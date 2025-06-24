<script setup>
import { defineProps } from "vue";

const props = defineProps({ phone: String });
</script>

<template>
  <div class="phone">
    <a :href="`tel:${props.phone}`" :aria-label="`Call ${props.phone}`"
      >Call {{ props.phone }}</a
    >
  </div>
</template>

<style scoped lang="scss">
.phone {
  width: 100%;
  min-width: 150px;
  > a {
    background: linear-gradient(to bottom, #ef8100, #c47600);
    color: #fff;
    font-weight: bold;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 4px;
  }
}
@media (min-width: 641px) {
  .phone {
    display: flex;
    align-items: flex-end;
    align-self: self-end;
    margin-left: 20px;
    > a {
      max-width: 230px;
      width: 100%;
    }
  }
}
</style>
