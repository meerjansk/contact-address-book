import { shallowMount } from "@vue/test-utils";
import { ref } from "vue";
import MyContacts from "@/components/MyContacts.vue";
import useContacts from "@/composables/contacts.js";
import usePagination from "@/composables/pagination.js";

jest.mock("@/composables/contacts.js");
jest.mock("@/composables/pagination.js");

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
];

describe("MyContacts.vue", () => {
  it("renders contacts list when API returns data", () => {
    useContacts.mockImplementation(() => {
      return {
        getContacts: jest
          .fn()
          .mockResolvedValue({ info: {}, results: contacts }),
      };
    });

    usePagination.mockImplementation(() => {
      return {
        getPreviousPage: jest.fn(),
        getNextPage: jest.fn(),
        changeOrder: jest.fn(),
        paginatedContacts: ref(contacts),
        totalItems: ref(contacts.length),
        itemsPerPage: 5,
        currentPage: 1,
      };
    });
    const wrapper = shallowMount(MyContacts);
    expect(wrapper.find("header > h1").text()).toEqual("My Contacts");
    expect(
      wrapper.find("header > select[aria-label='Sort contacts']")
    ).toBeDefined();
    expect(wrapper.find("main section.contacts")).toBeDefined();
    expect(wrapper.findAll("main nav.pagination")).toBeDefined();
    expect(wrapper.findAll("footer nav.pagination")).toBeDefined();
  });
  it("renders no data available text when API returns no data", () => {
    useContacts.mockImplementation(() => {
      return {
        getContacts: jest.fn().mockResolvedValue({ info: {}, results: null }),
      };
    });

    usePagination.mockImplementation(() => {
      return {
        getPreviousPage: jest.fn(),
        getNextPage: jest.fn(),
        changeOrder: jest.fn(),
        paginatedContacts: ref([]),
        totalItems: ref(0),
        itemsPerPage: 5,
        currentPage: 0,
      };
    });
    const wrapper = shallowMount(MyContacts);
    expect(wrapper.find("main section.contacts > h3").text()).toEqual(
      "No data to display"
    );
  });
});
