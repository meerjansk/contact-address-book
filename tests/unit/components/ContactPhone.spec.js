import { shallowMount } from "@vue/test-utils";
import ContactPhone from "@/components/ContactPhone.vue";

describe("ContactPhone.vue", () => {
  it("renders props.phone when passed", () => {
    const phone = "05-136-279";
    const wrapper = shallowMount(ContactPhone, {
      props: { phone },
    });
    expect(wrapper.find(".phone > a").text()).toMatch(`Call ${phone}`);
  });
});
