import { shallowMount } from "@vue/test-utils";
import ContactAddress from "@/components/ContactAddress.vue";

describe("ContactAddress.vue", () => {
  it("renders props.address and props.name when passed", () => {
    const address = {
      city: "Darbhanga",
      postcode: 39166,
      state: "Uttar Pradesh",
      country: "India",
    };
    const wrapper = shallowMount(ContactAddress, {
      props: { address },
    });
    expect(wrapper.findAll(".address > span")[0].text()).toEqual(
      `${address.city}`
    );
    expect(wrapper.findAll(".address > span")[1].text()).toEqual(
      `${address.postcode} ${address.state}`
    );
    expect(wrapper.findAll(".address > span")[2].text()).toEqual(
      `${address.country}`
    );
  });
});
