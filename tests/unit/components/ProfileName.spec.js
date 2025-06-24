import { shallowMount } from "@vue/test-utils";
import ProfileName from "@/components/ProfileName.vue";

describe("ProfileName.vue", () => {
  it("renders props.name when passed", () => {
    const name = {
      first: "Daria",
      last: "Hubert",
    };
    const wrapper = shallowMount(ProfileName, {
      props: { name },
    });
    expect(wrapper.find(".name").text()).toMatch(`${name.first} ${name.last}`);
  });
});
