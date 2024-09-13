// sum.test.ts
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Dashboard from '../src/views/Dashboard.vue'; 

const wrapper = mount(Dashboard);

describe("Dashboard tests", () => {
  it("Cek Sidebar Show on First Loaded?", () => {
    // Access the drawer ref
    expect(wrapper.vm.drawer).toBe(true);
  });
  it("Cek Sidebar Hide if Click?", async () => {
    // Access button
    const buttonSidebar = wrapper.find('[data-type="btnSideBarTest"]');
    expect(buttonSidebar.exists()).toBe(true);
    await buttonSidebar.trigger('click');
    expect(wrapper.vm.drawer).toBe(false);
  });
  it("Cek Sidebar Show if Click (modehide)?", async () => {
    // Access button
    const buttonSidebar = wrapper.find('[data-type="btnSideBarTest"]');
    expect(buttonSidebar.exists()).toBe(true);
    await buttonSidebar.trigger('click');
    expect(wrapper.vm.drawer).toBe(true);
  });
});
