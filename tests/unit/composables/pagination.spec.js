import usePagination from "@/composables/pagination";
import { ref } from "vue";

test("usePagination", () => {
  const contacts = [
    {
      name: {
        first: "Daria",
        last: "Hubert",
      },
      phone: "05-136-279",
      address: {
        city: "Darbhanga",
        postcode: 39166,
        state: "Uttar Pradesh",
        country: "India",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    },
    {
      name: {
        first: "Libertário",
        last: "Souza",
      },
      phone: "(57) 4318-7266",
      address: {
        city: "Aparecida de Goiânia",
        postcode: 15378,
        state: "Rondônia",
        country: "Brazil",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
      },
    },
    {
      name: {
        first: "Oliver",
        last: "Savela",
      },
      phone: "03-344-922",
      address: {
        city: "Nilsiä",
        postcode: 50544,
        state: "Lapland",
        country: "Finland",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/88.jpg",
      },
    },
    {
      name: {
        first: "Daria",
        last: "Hubert",
      },
      phone: "05-136-279",
      address: {
        city: "Darbhanga",
        postcode: 39166,
        state: "Uttar Pradesh",
        country: "India",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    },
    {
      name: {
        first: "Libertário",
        last: "Souza",
      },
      phone: "(57) 4318-7266",
      address: {
        city: "Aparecida de Goiânia",
        postcode: 15378,
        state: "Rondônia",
        country: "Brazil",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
      },
    },
    {
      name: {
        first: "Oliver",
        last: "Savela",
      },
      phone: "03-344-922",
      address: {
        city: "Nilsiä",
        postcode: 50544,
        state: "Lapland",
        country: "Finland",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/88.jpg",
      },
    },
    {
      name: {
        first: "Daria",
        last: "Hubert",
      },
      phone: "05-136-279",
      address: {
        city: "Darbhanga",
        postcode: 39166,
        state: "Uttar Pradesh",
        country: "India",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    },
    {
      name: {
        first: "Libertário",
        last: "Souza",
      },
      phone: "(57) 4318-7266",
      address: {
        city: "Aparecida de Goiânia",
        postcode: 15378,
        state: "Rondônia",
        country: "Brazil",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/69.jpg",
      },
    },
    {
      name: {
        first: "Oliver",
        last: "Savela",
      },
      phone: "03-344-922",
      address: {
        city: "Nilsiä",
        postcode: 50544,
        state: "Lapland",
        country: "Finland",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/88.jpg",
      },
    },
  ];
  const {
    paginatedContacts,
    totalItems,
    itemsPerPage,
    currentPage,
    getPreviousPage,
    getNextPage,
    changeOrder,
  } = usePagination(ref(contacts));

  totalItems.value = contacts.length;
  expect(itemsPerPage).toBe(5);
  expect(currentPage.value).toBe(0);
  const customEvent = {
    target: {
      value: "asc",
    },
  };
  changeOrder(customEvent);
  const updatedContacts = contacts
    .sort((a, b) => a.name.first.localeCompare(b.name.first))
    .slice(0, itemsPerPage);
  expect(paginatedContacts.value).toEqual(updatedContacts);
  getNextPage();
  expect(currentPage.value).toBe(1);
  getPreviousPage();
  expect(currentPage.value).toBe(0);
  // Check if clicking on Prev button when disabled stays on the first page
  getPreviousPage();
  expect(currentPage.value).toBe(0);
  const event = {
    target: {
      value: "desc",
    },
  };
  changeOrder(event);
  const sortedContacts = contacts
    .sort((a, b) => b.name.first.localeCompare(a.name.first))
    .slice(0, itemsPerPage);
  expect(paginatedContacts.value).toEqual(sortedContacts);
});
