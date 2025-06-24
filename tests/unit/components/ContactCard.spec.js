import { shallowMount } from "@vue/test-utils";
import ContactCard from "@/components/ContactCard.vue";

describe("ContactCard.vue", () => {
  it("renders props.contact when passed", () => {
    const contact = {
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
    };
    const wrapper = shallowMount(ContactCard, {
      props: { contact },
    });
    expect(wrapper.find(".card .name")).toBeDefined();
    expect(wrapper.find(".card .address")).toBeDefined();
    expect(wrapper.find(".card .picture")).toBeDefined();
    expect(wrapper.find(".card .phone")).toBeDefined();
  });
});
