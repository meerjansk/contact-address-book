import { ref } from "vue";

export default function usePagination(contacts) {
  const paginatedContacts = ref([]);
  const totalItems = ref(0);
  const itemsPerPage = 5;
  const currentPage = ref(0);

  const getPreviousPage = () => {
    if (currentPage.value === 0) {
      return paginatedContacts.value;
    }
    currentPage.value--;
    paginatedContacts.value = contacts.value.slice(
      currentPage.value * itemsPerPage,
      currentPage.value * itemsPerPage + itemsPerPage
    );
  };

  const getNextPage = () => {
    if (currentPage.value === totalItems.value / itemsPerPage - 1) {
      return paginatedContacts.value;
    }
    currentPage.value++;
    paginatedContacts.value = contacts.value.slice(
      currentPage.value * itemsPerPage,
      currentPage.value * itemsPerPage + itemsPerPage
    );
  };

  const changeOrder = (event) => {
    if (event.target.value === "asc") {
      paginatedContacts.value = contacts.value
        .sort((a, b) => a.name.first.localeCompare(b.name.first))
        .slice(0, itemsPerPage);
    } else {
      paginatedContacts.value = contacts.value
        .sort((a, b) => b.name.first.localeCompare(a.name.first))
        .slice(0, itemsPerPage);
    }
    currentPage.value = 0;
  };

  return {
    paginatedContacts,
    totalItems,
    itemsPerPage,
    currentPage,
    getPreviousPage,
    getNextPage,
    changeOrder,
  };
}
