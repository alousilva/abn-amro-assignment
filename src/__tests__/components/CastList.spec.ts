import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import CastList from "@/components/CastList.vue";
import CastItem from "@/components/CastItem.vue";
import { castMemberWithValidImageLinks } from "../mocks/data";

describe("CastList", () => {
  it("should render all the provided cast items", () => {
    // Repeated items just to have more than 1
    const castMembers = [
      castMemberWithValidImageLinks,
      castMemberWithValidImageLinks,
      castMemberWithValidImageLinks,
    ];
    const wrapper = shallowMount(CastList, {
      props: {
        castMembers,
      },
    });
    expect(wrapper.findAllComponents(CastItem).length).toBe(castMembers.length);
  });
});
