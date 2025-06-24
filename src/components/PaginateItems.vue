<script setup>
import { onMounted, defineProps } from "vue";

const props = defineProps({ totalPages: Number, currentPageIndex: Number });

onMounted(() => {});
</script>

<template>
  <nav aria-label="Pagination" class="pagination">
    <button
      @click="$emit('getPreviousPage')"
      :class="{ disabled: props.currentPageIndex === 0 }"
      :aria-disabled="props.currentPageIndex === 0"
      type="button"
    >
      Prev
    </button>
    <span>{{ props.currentPageIndex + 1 }} / {{ props.totalPages }}</span>
    <button
      @click="$emit('getNextPage')"
      :class="{ disabled: props.currentPageIndex === props.totalPages - 1 }"
      :aria-disabled="props.currentPageIndex === props.totalPages - 1"
      type="button"
    >
      Next
    </button>
  </nav>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 0;
  button {
    background-color: #ef8100;
    color: #fff;
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    &.disabled {
      background-color: grey;
      &:hover {
        cursor: default;
      }
    }
  }
}
</style>
