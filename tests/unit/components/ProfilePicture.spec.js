import { shallowMount } from "@vue/test-utils";
import ProfilePicture from "@/components/ProfilePicture.vue";

describe("ProfilePicture.vue", () => {
  it("renders props.picture and props.name when passed", () => {
    const name = {
      first: "Daria",
      last: "Hubert",
    };
    const picture = {
      large: "https://randomuser.me/api/portraits/women/65.jpg",
    };
    const wrapper = shallowMount(ProfilePicture, {
      props: { name, picture },
    });
    expect(wrapper.find(".picture > img").attributes().alt).toEqual(
      `${name.first} ${name.last}`
    );
    expect(wrapper.find(".picture > img").attributes().src).toEqual(
      `${picture.large}`
    );
  });
});
