<script setup>
import { onMounted, ref } from "vue";
import ContactCard from "./ContactCard";
import PaginateItems from "./PaginateItems";
import useContacts from "../composables/contacts.js";
import usePagination from "@/composables/pagination";

const contacts = ref([]);
const CONTACTS_COUNT = 20;

const { getContacts } = useContacts();
const {
  paginatedContacts,
  totalItems,
  itemsPerPage,
  currentPage,
  getPreviousPage,
  getNextPage,
  changeOrder,
} = usePagination(contacts);

const fetchData = () => {
  getContacts(CONTACTS_COUNT).then((data) => {
    if (!data?.results) {
      return;
    }
    contacts.value = data?.results.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    totalItems.value = contacts.value.length || 0;
    paginatedContacts.value = contacts.value.slice(0, itemsPerPage);
  });
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <header>
    <h1>My Contacts</h1>
    <select @change="changeOrder" aria-label="Sort contacts">
      <option value="asc" selected>ascending</option>
      <option value="dsc">Descending</option>
    </select>
  </header>
  <main>
    <PaginateItems
      :currentPageIndex="currentPage"
      :totalPages="totalItems / itemsPerPage || 1"
      @getPreviousPage="getPreviousPage"
      @getNextPage="getNextPage"
      v-if="contacts.length > itemsPerPage"
    />
    <section class="contacts" aria-label="Contact List">
      <template v-if="paginatedContacts.length > 0">
        <ContactCard
          v-for="(contact, index) in paginatedContacts"
          :contact="contact"
          :key="index"
        />
      </template>
      <template v-else>
        <h3>No data to display</h3>
      </template>
    </section>
  </main>
  <footer>
    <PaginateItems
      :currentPageIndex="currentPage"
      :totalPages="totalItems / itemsPerPage || 1"
      @getPreviousPage="getPreviousPage"
      @getNextPage="getNextPage"
      v-if="contacts.length > itemsPerPage"
    />
  </footer>
</template>

<style scoped lang="scss">
h1 {
  font-size: 32px;
  font-weight: normal;
  text-align: left;
  color: #ef8100;
  margin: 0;
}
header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 5px 0;
  flex-wrap: wrap;
}
select {
  height: 20px;
  align-self: center;
}
@media (min-width: 431px) {
  .contacts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
@media (min-width: 641px) {
  .contacts {
    max-width: 728px;
    margin: 0 auto;
  }
}
</style>
