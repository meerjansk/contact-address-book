import { shallowMount } from "@vue/test-utils";
import PaginateItems from "@/components/PaginateItems.vue";

describe("PaginateItems.vue", () => {
  it("renders props.totalPages and props.currentPage when passed", () => {
    const totalPages = 4;
    const currentPageIndex = 2;
    const wrapper = shallowMount(PaginateItems, {
      props: { totalPages, currentPageIndex },
    });
    expect(wrapper.findAll(".pagination > a")[0].text()).toEqual("Prev");
    expect(wrapper.findAll(".pagination > a")[1].text()).toEqual("Next");
    expect(wrapper.find(".pagination > span").text()).toEqual("3 / 4");
  });
});
